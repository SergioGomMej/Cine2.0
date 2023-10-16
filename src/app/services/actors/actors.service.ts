import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map, take } from 'rxjs';
import { Actors, Movies} from 'src/app/interface/movies';
import { MoviesService } from '../movies/movies.service';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {
  url = environment.apiUrl;
  movies = this.peliculasService.getMovies();
  nameMovie:any;
  constructor(private http:HttpClient, private peliculasService: MoviesService) {

  }

  /** COMPONENT PELICULA */
  getActors():Observable<Actors[]>{
    return this.http.get<Actors[]>(`${this.url}/actors`);
  }

  getNameMovieByActors():Observable<any>{
    let actorsWithMovies:Actors[]=[];
    return forkJoin([this.getActors(), this.movies]).pipe(map(([actors, movies]) => {
      const movieMap = new Map<number, string>();
      movies.forEach(movie => {
        movieMap.set(movie.id, movie.title);
      });
      actorsWithMovies = actors.map(actor => {
        const movieParticipated = actor.movies.map(id => {
          return movieMap.get(id);
        });
        return {...actor, movieParticipated}
      });
      return actorsWithMovies;
    }));
  }

  deleteMovieFromActor(movieId: number):void{
    let idActor;
    let url:string="";
    this.getActors().pipe(take(1)).subscribe(
      actor => {
        for (let i = 0; i < actor.length; i++) {
          this.http.delete(`${this.url}/actors/${actor[i].id}/movies/${movieId}`);
        }
      }
    )
  }

  addMovies(peliculaNueva:Movies):Observable<Movies>{
    return this.http.post<Movies>(`${this.url}/movies`,peliculaNueva);
  }

}
