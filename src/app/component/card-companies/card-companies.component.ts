import { Component, Input } from '@angular/core';
import { Estudio } from 'src/app/interface/movies';

@Component({
  selector: 'app-card-companies',
  templateUrl: './card-companies.component.html',
  styleUrls: ['./card-companies.component.scss']
})
export class CardCompaniesComponent {
  @Input() estudioFromList!:Estudio;
}
