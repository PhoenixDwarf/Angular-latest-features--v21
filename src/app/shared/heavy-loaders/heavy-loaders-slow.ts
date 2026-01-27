import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  imports: [NgClass],
  styles: ``,
  template: `
    <section
      [ngClass]="['w-full h-150 flex justify-center items-center', cssClass()]"
    >
      Heavy Loader Slow
    </section>
  `,
})
export class HeavyLoadersSlow {
  public cssClass = input.required<string>();

  // Implementation of a JS blocking component
  // The following code is only for demonstration, it should never be implemented in any real project

  constructor() {
    const start = Date.now();
    console.log('JS blocking started');
    while (Date.now() - start < 3000) {}
    console.log('Done blocking');
  }
}
