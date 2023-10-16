import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movies } from 'src/app/interface/movies';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
  selector: 'app-search-pages',
  templateUrl: './search-pages.component.html',
  styleUrls: ['./search-pages.component.scss']
})
export class SearchPagesComponent implements OnInit{
  valorBuscador: string = '';
  @Output() searchMovie: EventEmitter<Movies[]> = new EventEmitter<Movies[]>();
  loading:boolean=true;
  itemsPage: number = 2;
  currentPage: number = 1;
  constructor(private peliculaService:MoviesService){}

  ngOnInit(): void {
    this.buscar(this.valorBuscador)
  }

  buscar(valorBuscador:string){
    this.valorBuscador = valorBuscador;
    console.log(valorBuscador);
    this.peliculaService.getMoviesByName(valorBuscador).pipe().subscribe(
        movie => {
          this.searchMovie.emit(movie);
        },
        error => {
          console.log(error);
        }
      )
    }
}
