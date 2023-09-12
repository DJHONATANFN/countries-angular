import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { Subscription, switchMap } from 'rxjs';
import { Country } from '../../interfaces/Country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit, OnDestroy {

  public country!:Country;
  private countrySuscription?: Subscription;

  constructor(private activatedRoute:ActivatedRoute, private countriesService:CountriesService,
  private router:Router){}

  ngOnDestroy(): void {
    this.countrySuscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.countrySuscription= this.activatedRoute.params
    .pipe(
      switchMap(({id})=>this.countriesService.searchCountryByCode(id))
    ).subscribe(country=>{
      if(!country){
        return this.router.navigateByUrl('')
      }
      return this.country= country;
    });
  }

}
