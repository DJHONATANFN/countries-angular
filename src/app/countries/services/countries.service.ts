import { Country } from './../interfaces/Country';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiURL: string = "https://restcountries.com/v3.1";

  constructor(private http: HttpClient) { }

  searchCountryByCode(code: string): Observable<Country | null> {
    return this.http.get<Country[]>(`${this.apiURL}/alpha/${code}`)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(() => {
          return of(null)
        })
      );
  }

  searchCapital(term: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiURL}/capital/${term}`)
      .pipe(
        catchError(() => {
          return of([])
        })
      );
  }

  searchCountry(term: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiURL}/name/${term}`)
      .pipe(
        catchError(() => {
          return of([])
        })
      );
  }
  searchRegion(term: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiURL}/region/${term}`)
      .pipe(
        catchError(() => {
          return of([])
        })
      );
  }

}
