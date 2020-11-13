import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';

import { createCustomElement } from '@angular/elements';

@NgModule({
  imports: [CommonModule],
  declarations: [CounterComponent],
  entryComponents: [CounterComponent]
})
export class NgcounterModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(CounterComponent, { injector });
    window.customElements.define('ejemplo-counter', el);
  }
}

/*

class CounterComponent extends HTMLElement {

}

*/
