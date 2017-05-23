import {
    Directive,
    ElementRef,
    Input
} from '@angular/core';

@Directive({
  selector: '[tooltip]',
  inputs: [
      'text: tooltip'
  ],
  host: {
      '(mouseover)': 'show()'
  }
})
export class LearnDirectiveComponent {
    text: string;

    show(event: Event): void {
        alert(this.text);
    }
}