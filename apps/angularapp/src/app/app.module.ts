import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import '@ejemplo/counter';
import { NgcounterModule } from '@ejemplo/ngcounter';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgcounterModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
