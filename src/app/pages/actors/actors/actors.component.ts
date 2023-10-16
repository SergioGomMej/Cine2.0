import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Actors, Movies } from 'src/app/interface/movies';
import { ActorsService } from 'src/app/services/actors/actors.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class ActorsComponent implements OnInit{
  actors?: Actors[];
  error?: string;
  loading:boolean=true;
  nameMovies:string[]=[];
  constructor(private actorsService : ActorsService) {}

  ngOnInit(): void {
    this.getActors();
  }

  getActors() {
    this.actorsService.getNameMovieByActors().pipe(take(1)).subscribe(
      actorWithNameMovies => {
        this.actors = actorWithNameMovies,
        this.actors = actorWithNameMovies.map((actor: { movieParticipated: string[]; }) => {
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
