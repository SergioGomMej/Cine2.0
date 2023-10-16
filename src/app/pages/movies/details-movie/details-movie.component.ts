import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actors, Estudio, Movies } from 'src/app/interface/movies';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { take } from 'rxjs/operators';
import { ActorsService } from 'src/app/services/actors/actors.service';
import { EstudiosService } from 'src/app/services/estudios/estudios.service';

@Component({
  selector: 'app-details-movie',
  templateUrl: './details-movie.component.html',
  styleUrls: ['./details-movie.component.scss'],
})
export class DetailsMovieComponent implements OnInit {
  movieDetails: Movies = {
    id: 0,
    title: '',
    poster: null,
    genre: [],
    year: 0,
    duration: 0,
    imdbRating: 0,
    actors: [],
  };
  loading: boolean = true;
  actorsName: Actors[] = [];
  nameString: string[] = [];
  error: string[] = [];
  actors?: Actors[];
  id = Number(this.route.snapshot.paramMap.get('id'));
  constructor(
    private MoviesService: MoviesService,
    private router: Router,
    private ActorsService: ActorsService,
    private route: ActivatedRoute,
    private EstudioService: EstudiosService
  ) {}

  ngOnInit(): void {
    this.getMoviesbyId();
  }

  getMoviesbyId() {
    this.MoviesService
      .getMoviesById(this.id)
      .pipe(take(1))
      .subscribe(
        (movie) => {
          this.movieDetails = movie;
          this.loading = false;

          if (typeof this.movieDetails.actors[0] == 'number') {
            this.getActors(this.movieDetails.actors);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }
  getActors(movieDetails: number[]) {
    this.ActorsService.getActors().subscribe(
      (actor) => {
        this.actors = actor;
        this.actorsName = movieDetails.flatMap((movieId) =>
          this.actors!.filter((actor) => actor.id === movieId)
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }

  eliminarRegistro() {
    this.MoviesService.deleteMovies(this.id).pipe(take(1)).subscribe(
        (data) => {
          this.router.navigate(['']);
        },
        (error) => {
          console.log(error);
        }
      );

      this.ActorsService.deleteMovieFromActor(this.id);
  }
}
