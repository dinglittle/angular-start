import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//导入 FormsModule 用来支持 input  output 双向数据绑定
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { TemplateInterpolationComponent } from './template-interpolation/template-interpolation.component';
import { TemplateRefVarComponent } from './template-ref-var/template-ref-var.component';
import { MyTemplateComponent } from './my-template/my-template.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateInterpolationComponent,
    TemplateRefVarComponent,
    MyTemplateComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule, FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
