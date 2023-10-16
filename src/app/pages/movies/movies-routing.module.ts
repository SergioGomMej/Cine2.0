import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { DetailsMovieComponent } from './details-movie/details-movie.component';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { UpdateMoviesComponent } from './update-movies/update-movies.component';

const moviesRoutes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'details/:id', component: DetailsMovieComponent },
  { path: 'add', component: AddMoviesComponent },
  { path: 'details/:id/modificar/:id', component: UpdateMoviesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(moviesRoutes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
