import { NgModule } from "@angular/core";
import { CardActorsComponent } from "src/app/component/card-actors/card-actors.component";
import { ActorsComponent } from "./actors/actors.component";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { PosterPipeModule } from "src/app/pipes/poster/poster-pipe.module";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [
    ActorsComponent,
    CardActorsComponent
  ],
  imports: [
    BrowserModule,
    ProgressSpinnerModule,
    PosterPipeModule,
    RouterModule
  ],
  providers: [],
  bootstrap: []
})
export class ActorModule { }
