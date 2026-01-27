import { Component } from '@angular/core';
import { HeavyLoadersSlow } from '@shared/heavy-loaders/heavy-loaders-slow';

@Component({
  selector: 'app-defer-views',
  imports: [HeavyLoadersSlow],
  templateUrl: './defer-views.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export default class DeferViews {}
