import { Component, inject } from '@angular/core';
import { Countries } from '@services/countries';
import { Title } from '@shared/title/title';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-country-list',
  imports: [Title, RouterLink],
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
