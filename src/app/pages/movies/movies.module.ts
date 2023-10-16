import { MoviesComponent } from './movies/movies.component';
import { DetailsMovieComponent } from './details-movie/details-movie.component';
import { CardMoviesComponent } from 'src/app/component/card-movies/card-movies.component';
import { NgModule } from '@angular/core';
import { SearchPagesComponent } from 'src/app/component/search-pages/search-pages.component';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { UpdateMoviesComponent } from './update-movies/update-movies.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DurationPipe } from 'src/app/pipes/duration/duration.pipe';
import { PosterPipeModule } from 'src/app/pipes/poster/poster-pipe.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormComponent } from 'src/app/component/formAdd-Up-Movies/reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    MoviesComponent,
    DetailsMovieComponent,
    CardMoviesComponent,
    AddMoviesComponent,
    UpdateMoviesComponent,
    SearchPagesComponent,
    DurationPipe,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    ProgressSpinnerModule,
    PosterPipeModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: []
})
export class MoviesModule { }
