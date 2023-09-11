import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/Country';

@Component({
  selector: 'countries-country-table',
  templateUrl: './country-table.component.html',
  styles: [
    `
    .bandera{
      width: 100px
    }
    `
  ]
})
export class CountryTableComponent {

  @Input()
  public countries: Country[] = [];
}
