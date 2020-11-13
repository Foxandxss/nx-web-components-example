import { Component, Input, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CounterComponent {
  @Input() value = 1;
  @Input() step = 1;
  @Input() min;
  @Input() max;

  increment() {
    const newValue = +this.value + +this.step;

    if (this.max) {
      this.value = newValue > +this.max ? +this.max : +newValue;
    } else {
      this.value = +newValue;
    }

    this.cdr.detectChanges();
  }

  decrement() {
    const newValue = +this.value - +this.step;

    if (this.min) {
      this.value = newValue <= +this.min ? +this.min : +newValue;
    } else {
      this.value = +newValue;
    }

    this.cdr.detectChanges();
  }

  constructor(private cdr: ChangeDetectorRef) { }
}
