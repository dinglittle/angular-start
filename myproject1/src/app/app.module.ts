import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// ngModule 支持
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TemplateInterpolationComponent } from './template-interpolation/template-interpolation.component';
@NgModule({
  declarations: [
    AppComponent,
    TemplateInterpolationComponent,
  ],
  imports: [
    BrowserModule,FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
