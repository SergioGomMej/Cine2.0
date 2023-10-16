import { Component} from '@angular/core';
import { Movies } from 'src/app/interface/movies';

@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.scss'],
})
export class AddMoviesComponent{
  movieDetails: Movies = {
    id: 0,
    title: '',
    poster: null,
    genre: [],
    year: 0,
    duration: 0,
    imdbRating: 0,
    actors: []
  };
}
