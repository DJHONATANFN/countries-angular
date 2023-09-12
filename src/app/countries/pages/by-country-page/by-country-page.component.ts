import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/Country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {

  public busqueda: string = "Buscar por Pais";
  public countries: Country[] = [];
  public isLoading:boolean= false;
  public initialValue:string ="";

  constructor(private countryService: CountriesService) { }

  ngOnInit(): void {
    this.countries= this.countryService.cacheStore.byCountries.countries;
    this.initialValue= this.countryService.cacheStore.byCountries.term;
  }

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
