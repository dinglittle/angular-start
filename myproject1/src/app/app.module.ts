import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateInterpolationComponent } from './template-interpolation/template-interpolation.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateInterpolationComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
