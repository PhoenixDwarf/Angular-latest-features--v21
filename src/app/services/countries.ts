import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';

import type { ICountry } from '@interfaces/req-response';
import { delay, map, of } from 'rxjs';

interface State {
  countries: ICountry[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private http = inject(HttpClient);
  public countries = computed(() => this.#state().countries);

  #state = signal<State>({
    loading: true,
    countries: [],
  });

  constructor() {
    this.http
      .get<ICountry[]>('https://restcountries.com/v3.1/region/europe')
      .pipe(delay(1500))
      .subscribe((res) => {
        this.#state.set({
          loading: false,
          countries: res,
        });
      });
  }

  getCountryBycca2(cca2: string) {
    return of(this.#state().countries.find((country) => country.cca2 === cca2));

    // this.http
    //   .get<ICountry[]>(`https://restcountries.com/v3.1/alpha?codes=${cca2}`)
    //   .pipe(
    //     delay(1500),
    //     map((countryList) => countryList[0]),
    //   );
  }
}
