import { Component, inject } from '@angular/core';
import { Countries } from '@services/countries';

@Component({
  selector: 'app-country-list',
  imports: [],
  templateUrl: './country-list.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export default class CountryList {
  public countryService = inject(Countries);
}
