import { Component, Input, OnInit } from '@angular/core';
import { EstudiosService } from 'src/app/services/estudios/estudios.service';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { ActorsService } from 'src/app/services/actors/actors.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Movies } from 'src/app/interface/movies';
import { take } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formAdd-Up-Movies',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  @Input() movies!:Movies;

  listGenre: string[] = [];
  loading: boolean = true;
  nameActors: string[] = [];
  nameEstudios: string[] = [];
  addForm!: FormGroup;
  id = Number(this.route.snapshot.paramMap.get('id'));

  constructor(
    private readonly reactiveForms: FormBuilder,
    private PeliculasService: MoviesService,
    private ActorsService: ActorsService,
    private EstudioService: EstudiosService,
    private router:Router,
    private route: ActivatedRoute
  ) {this.addForm = this.validacionesForm();}

  ngOnInit(): void {
    this.getGeners();
    this.getActors();
    this.getCompanies();
  }
  getGeners(): void {
    this.PeliculasService.getMovies().subscribe(
      (movie) => {
        this.listGenre = [...new Set(movie.map((movie) => movie.genre).flatMap((genres) => genres))];
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getActors(): void {
    this.ActorsService.getActors().subscribe(
      (actors) => {
        this.nameActors = actors.map((actors) => actors.nombre_completo).flatMap((name) => name);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getCompanies(): void {
    this.EstudioService.getEstudios().subscribe(
      (estudios) => {
        this.nameEstudios = estudios.map((estudios) => estudios.name).flatMap((name) => name),
        this.loading = false
      },
      (error) => {
        console.log(error);
      }
    );
  }
  validacionesForm(): FormGroup {
    return this.reactiveForms.group({
      title: ['', [Validators.required, Validators.pattern(/.*PELICULA AÑADIDA$/)]],
      poster: ['', [Validators.required, Validators.pattern(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*\.png$/)]],
      genre: [[], Validators.required],
      actors: [[], Validators.required],
      estudio: [[], Validators.required],
      year: ['', [Validators.required, Validators.min(2000)]],
      duration: ['', [Validators.required, Validators.min(1)]],
      imdbRating: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
    });
  }

  addMoviesForm(addForm:FormGroup) {
    let peliculaNueva = addForm.value;
    let listId: number[];
    this.PeliculasService.getMovies().subscribe(
      (movie) => {
        listId = movie.map((movie) => movie.id);
        let id = Math.floor(Math.random() * 51);
        while (listId.includes(id)) {
          id = Math.floor(Math.random() * 51);
        }
        peliculaNueva.id = id;
      },
      (error) => {
        console.log(error);
      }
    );

    this.PeliculasService.addMovies(peliculaNueva)
      .pipe(take(1))
      .subscribe(
        (data) => {
          alert('La pelicula se ha añadido correctamente.');
          this.router.navigate(['']);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  updateMoviesForm(addForm:FormGroup){
    addForm.value.id = this.id;
    this.PeliculasService.updateMovies(addForm).pipe(take(1)).subscribe(
      (data) =>{
        this.router.navigate(['']);
      }
    );
  }
}
