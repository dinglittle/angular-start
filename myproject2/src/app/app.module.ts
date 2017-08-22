import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateInterpolationComponent } from './template-interpolation/template-interpolation.component';
import { TemplateRefVarComponent } from './template-ref-var/template-ref-var.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateInterpolationComponent,
    TemplateRefVarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
