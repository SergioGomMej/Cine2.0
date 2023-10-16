import { Component, Input, OnChanges, OnInit,OnDestroy } from '@angular/core';
import { Movies } from 'src/app/interface/movies';

@Component({
  selector: 'app-card-movies',
  templateUrl: './card-movies.component.html',
  styleUrls: ['./card-movies.component.scss']
})
export class CardMoviesComponent implements OnInit, OnChanges, OnDestroy {
  @Input() movieFromList!: Movies;
  @Input() searchMovie!: Movies;

  ngOnInit() {
    /**  Se ejecutará cuando el componente se inicializa.*/
  }

  ngOnChanges() {
    /**  Se ejecutará cuando cambien los valores de entrada. */
  }

  ngOnDestroy() {
    /**  Se ejecutará antes de que el componente sea destruido. */
  }
}
