import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./component/footer/footer.component";
import { NavbarComponent } from "./component/navbar/navbar.component";
import { EstudiosModule } from "./pages/estudios/estudios.module";
import { ActorModule } from "./pages/actors/actors.module";
import { MoviesModule } from "./pages/movies/movies.module";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    ProgressSpinnerModule,
    MoviesModule,
    ActorModule,
    EstudiosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
