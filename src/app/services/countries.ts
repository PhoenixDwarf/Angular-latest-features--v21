import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Country } from '@interfaces/req-response';
import { delay } from 'rxjs';

interface State {
  countries: Country[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class Countries {
  private http = inject(HttpClient);
  public countries = computed(() => this.#state().countries);

  #state = signal<State>({
    loading: true,
    countries: [],
  });

  constructor() {
    this.http
      .get<Country[]>('https://restcountries.com/v3.1/region/europe')
      .pipe(delay(1500))
      .subscribe((res) => {
        this.#state.set({
          loading: false,
          countries: res,
        });
      });
  }
}
