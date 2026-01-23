import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class Title { }
