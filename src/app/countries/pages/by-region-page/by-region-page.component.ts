import { Component } from '@angular/core';
import { Country } from '../../interfaces/Country';
import { CountriesService } from '../../services/countries.service';

type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public busqueda: string = "Buscar por Region";
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?:Region;

  constructor(private countryService: CountriesService) { }

  searchByRegion(region: Region) {
    this.selectedRegion= region;
    this.isLoading = true;
    this.countryService.searchRegion(region)
      .subscribe({
        next: (countries) => {
          this.countries = countries;
          this.isLoading = false;
        }
      })
  }
}
