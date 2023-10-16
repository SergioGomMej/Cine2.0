import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';
import { Estudio } from 'src/app/interface/movies';
import { MoviesService } from '../movies/movies.service';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {
  url = environment.apiUrl;
  movies = this.peliculasService.getMovies();
  nameMovie:any;
  constructor(private http:HttpClient, private peliculasService: MoviesService) { }

  /** COMPONENT PELICULA */
  getEstudios(): Observable<Estudio[]>{
    return this.http.get<Estudio[]>(`${this.url}/companies`);
  }

  getNameMovieByEstudio():Observable<any>{
    let EstudioWithMovies:any[]=[];
    return forkJoin([this.getEstudios(), this.movies]).pipe(map(([estudios, movies]) => {
      const movieMap = new Map<number, string>();
      movies.forEach(movie => {
        movieMap.set(movie.id, movie.title);
      });
      EstudioWithMovies = estudios.map(estudio => {
        const movieParticipated = estudio.movies.map(id => {
          return movieMap.get(id);
        });
        return {...estudio, movieParticipated}
      });
      return EstudioWithMovies;
    }));
  }

}
