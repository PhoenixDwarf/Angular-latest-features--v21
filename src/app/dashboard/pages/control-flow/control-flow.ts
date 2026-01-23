import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export default class ControlFlow {
  public showContent = signal(false);
  public toggleContent() {
    this.showContent.update((value) => !value);
  }
}
