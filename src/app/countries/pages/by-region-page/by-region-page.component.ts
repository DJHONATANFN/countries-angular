import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/Country';
import { Region } from '../../interfaces/region.type';
import { CountriesService } from '../../services/countries.service';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit {

  public busqueda: string = "Buscar por Region";
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?:Region;

  constructor(private countryService: CountriesService) { }

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byRegion.countries;
    this.selectedRegion= this.countryService.cacheStore.byRegion.region;
  }

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
