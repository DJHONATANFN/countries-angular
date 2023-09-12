import { Component } from '@angular/core';
import { Country } from '../../interfaces/Country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  public busqueda: string = "Buscar por Pais";
  public countries: Country[] = [];
  public isLoading:boolean= false;

  constructor(private countryService: CountriesService) { }

  searchByPais(term: string) {
    this.isLoading= true;
    this.countryService.searchCountry(term)
      .subscribe({
        next: (countries) => {
          this.countries = countries;
          this.isLoading= false;
        }
      })

  }

}
