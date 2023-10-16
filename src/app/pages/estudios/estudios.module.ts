import { NgModule } from "@angular/core";
import { CardCompaniesComponent } from "src/app/component/card-companies/card-companies.component";
import { EstudiosComponent } from "./estudios/estudios.component";
import { StarRatingModule } from "angular-star-rating";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [
    EstudiosComponent,
    CardCompaniesComponent
  ],
  imports: [
    BrowserModule,
    StarRatingModule.forRoot(),
    ProgressSpinnerModule,
    RouterModule
  ],
  providers: [],
  bootstrap: []
})
export class EstudiosModule { }
