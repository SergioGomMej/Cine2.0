import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { Movies } from 'src/app/interface/movies';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
  selector: 'app-update-movies',
  templateUrl: './update-movies.component.html',
  styleUrls: ['./update-movies.component.scss'],
})
export class UpdateMoviesComponent implements OnInit{
  movie: Movies = {
    id: 0,
    title: '',
    poster: null,
    genre: [],
    year: 0,
    duration: 0,
    imdbRating: 0,
    actors: [],
  };
  id = Number(this.route.snapshot.paramMap.get('id'));
  isEditing: boolean = true;
  constructor(
    private MoviesService: MoviesService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.getMoviesbyId();
  }

  getMoviesbyId() {
    this.MoviesService.getMoviesById(this.id).pipe(take(1)).subscribe(
        (movie) => {
          this.movie = movie;
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
