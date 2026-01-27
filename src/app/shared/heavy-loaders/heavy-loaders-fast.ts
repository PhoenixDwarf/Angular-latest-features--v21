import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-fast',
  imports: [NgClass],
  template: `
    <section
      [ngClass]="['w-full flex justify-center items-center', cssClass()]"
    >
      <ng-content #name />
    </section>
  `,
})
export class HeavyLoadersFast {
  public cssClass = input.required<string>();

  constructor() {
    console.log('Heavy loader fast component created!');
  }
}
