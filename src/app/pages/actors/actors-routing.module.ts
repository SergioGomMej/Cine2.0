import { NgModule } from '@angular/core';
import { ActorsComponent } from './actors/actors.component';
import { RouterModule, Routes } from '@angular/router';

const estudiosRoutes: Routes = [
  { path: '', component: ActorsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(estudiosRoutes)],
  exports: [RouterModule],
})
export class ActorsRoutingModule { }
