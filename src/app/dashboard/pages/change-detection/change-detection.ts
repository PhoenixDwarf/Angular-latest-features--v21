import { JsonPipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { Title } from '@shared/title/title';

@Component({
  selector: 'app-change-detection',
  imports: [Title, JsonPipe],
  styles: ``,
  template: `
    <app-title [title]="currentFramework()" />
    <pre>{{ frameworkAsSignal() | json }}</pre>
    <pre>{{ frameworkAsProperty | json }}</pre>
  `,
})
export default class ChangeDetection {
  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  });

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
  };

  public currentFramework = computed(
    () => `Change detection - ${this.frameworkAsSignal().name}`,
  );

  constructor() {
    setTimeout(() => {
      this.frameworkAsProperty.name = 'React';
      this.frameworkAsSignal.update((val) => ({ ...val, name: 'React' }));
      console.log('Done');
    }, 3000);
  }
}
