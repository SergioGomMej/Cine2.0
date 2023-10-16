import { Component, Input } from '@angular/core';
import {  skip, take } from 'rxjs';
import { Actors, Movies } from 'src/app/interface/movies';
import { ActorsService } from 'src/app/services/actors/actors.service';

@Component({
  selector: 'app-card-actors',
  templateUrl: './card-actors.component.html',
  styleUrls: ['./card-actors.component.scss'],
})
export class CardActorsComponent {
  @Input() actorFromList!: Actors;
  nameMovieByActor: Movies[][] = [];
  loading: boolean = true;
  constructor(private actorsService: ActorsService) {}

  ngOnInit(): void {

  }


}
