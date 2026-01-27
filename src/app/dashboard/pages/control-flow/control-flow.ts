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
  public grade = signal<string>('A');
  public frameworks = signal(['Angular', 'Vue', 'Qwik', 'React', 'Svelte']);
  public frameworks2 = signal([]);

  public toggleContent() {
    this.showContent.update((value) => !value);
  }
}
