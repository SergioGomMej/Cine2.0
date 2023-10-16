import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Estudio } from 'src/app/interface/movies';
import { EstudiosService } from 'src/app/services/estudios/estudios.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.scss']
})
export class EstudiosComponent implements OnInit{
  estudios?: Estudio[];
  error?: string;
  loading:boolean=true;
  constructor(private estudiosService : EstudiosService) {}

  ngOnInit(): void {
    this.getEstudioWithMovie();
  }

  getEstudioWithMovie(){
    this.estudiosService.getNameMovieByEstudio().pipe(take(1)).subscribe(
      estudioWithMovies => {
        this.estudios = estudioWithMovies,
        this.estudios = estudioWithMovies.map((actor: { movieParticipated: string[]; }) => {
          return {
            ...actor,
            movies: actor.movieParticipated
          };
        });
        this.loading = false;
      },
      error => {
        console.log(error);
      }
    );
  }
}
