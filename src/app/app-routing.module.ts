import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'peliculas', pathMatch: 'full' },
  { path: 'peliculas', loadChildren: () => import('./pages/movies/movies-routing.module').then((m) => m.MoviesRoutingModule) },
  { path: 'actores', loadChildren: () => import('./pages/actors/actors-routing.module').then((m) => m.ActorsRoutingModule) },
  { path: 'estudios', loadChildren: () => import('./pages/estudios/estudios-routing.module').then((m) => m.EstudiosRoutingModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
