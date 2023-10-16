import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/interface/movies';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: Movies[] = [];
  searchMovies: Movies[] = [];
  error?: string;
  loading: boolean = true;
  itemsPage: number = 2;
  currentPage: number = 1;
  displayedMovies: Movies[] = [];
  totalPages!:number;
  pageNumbers: number[] = [];

  constructor(private MoviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.getTotalPages();
    this.getMovies();
  }

  getMovies():void{
    this.MoviesService.getMoviesPaginator(this.currentPage, this.itemsPage).subscribe(
      (movies) => {
        this.movies = movies;
        this.loading = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getTotalPages():number[]{
    this.MoviesService.getMovies().subscribe(
      (movies) => {
        this.movies = movies;
        this.totalPages = Math.ceil(this.movies.length/2);
        for (let i = 1; i <= this.totalPages; i++) {
          this.pageNumbers.push(i);
        }
        this.loading = false;

      },
      (error) => {
        console.log(error);
      }
    );
    return this.pageNumbers;
  }

  prevPage():void{
    if (this.currentPage > 1) {
      this.currentPage = this.currentPage-1;
      this.getMovies();
    }
  }

  nextPage():void{
    this.currentPage = this.currentPage+1;
    this.getMovies();
  }

  pageSelected(value:number):void{
    this.currentPage = value;
    this.getMovies();
  }

  buscador(movie: Movies[]){
    if(movie){
      this.searchMovies = movie
      console.log(movie)
    }else{
      this.searchMovies = []
    }
  }

}
