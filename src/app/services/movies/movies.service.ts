import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Movies } from '../../interface/movies';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  url = environment.apiUrl;
  constructor(private http:HttpClient) { }

  /** COMPONENT PELICULA */
  getMovies(): Observable<Movies[]>{
    return this.http.get<Movies[]>(`${this.url}/movies`);
  }

  /** COMPONENT PELICULA paginador */
  getMoviesPaginator(page: number, pageSize: number):Observable<Movies[]>{
    return this.http.get<Movies[]>(`${this.url}/movies?_page=${page}&_limit=${pageSize}`)
  }

  /** COMPONENT DETAILS-PELICULA */
  getMoviesById(id:number):Observable<Movies>{
    return this.http.get<Movies>(`${this.url}/movies/${id}`);
  }

  /** COMPONENT DELETE PELICULA */
  deleteMovies(id: number):Observable<Movies>{
    return this.http.delete<Movies>(`${this.url}/movies/${id}`);
  }

  /** COMPONENT DETAILS-PELICULA */
  addMovies(peliculaNueva:Movies):Observable<Movies>{
    return this.http.post<Movies>(`${this.url}/movies`,peliculaNueva);
  }

  /** COMPONENT UPDATE PELICULA */
  updateMovies(addForm: FormGroup):Observable<Movies>{
    return this.http.put<Movies>(`${this.url}/movies/${addForm.value.id}`,addForm.value);
  }

  /** COMPONENT DETAILS-PELICULA */
  getMoviesByName(name:string):Observable<Movies[]>{
    return this.http.get<Movies[]>(this.url + '/movies').pipe(
      map((movies: Movies[]) => {
        return movies.filter(movie => {
          const titleJSON = movie.title.replace(/[^\w\s]/gi, '').toLowerCase();
          const titleSearch = name.replace(/[^\w\s]/gi, '').toLowerCase();
          /** Realiza la comparación */
          return titleJSON.includes(titleSearch);
        });
      })
    );
  }
}
