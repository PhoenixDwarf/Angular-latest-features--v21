import { Injectable, signal } from '@angular/core';
import { CountryResponse } from '@interfaces/req-response';

interface State {
  countries: CountryResponse[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class Countries {
  #state = signal<State>({
    loading: true,
    countries: [],
  });
  constructor() {
    console.log('Loading data');
  }
}
