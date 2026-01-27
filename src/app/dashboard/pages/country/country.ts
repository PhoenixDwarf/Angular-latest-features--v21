import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

import { Title } from '@shared/title/title';
import { switchMap } from 'rxjs';
import { CountriesService } from '@services/countries';

@Component({
  selector: 'app-country',
  imports: [Title],
  template: `
    <app-title [title]="titleLable()" />
    @if (country()) {
      <section>
        <img
          [srcset]="country()?.flags?.svg"
          [alt]="country()?.flags?.alt"
          width="600"
          [style]="'view-transition-name: flag-' + country()?.cca2"
        />
      </section>
    } @else {
      <p>Loading info</p>
    }
  `,
})
export default class Country {
  private route = inject(ActivatedRoute);
  private countryService = inject(CountriesService);

  public country = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.countryService.getCountryBycca2(id)),
    ),
  );

  public titleLable = computed(
    () => `Country - ${this.country()?.name?.common ?? 'loading'}`,
  );

  constructor() {
    this.route.params.subscribe((res) => console.log(res));
  }
}
