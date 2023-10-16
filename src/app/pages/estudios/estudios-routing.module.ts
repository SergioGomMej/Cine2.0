import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiosComponent } from './estudios/estudios.component';

const estudiosRoutes: Routes = [
  { path: '', component: EstudiosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(estudiosRoutes)],
  exports: [RouterModule],
})
export class EstudiosRoutingModule { }
