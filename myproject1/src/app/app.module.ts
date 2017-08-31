import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// ngModule 支持
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TemplateInterpolationComponent } from './template-interpolation/template-interpolation.component';
import { TemplateRefVarComponent } from './template-ref-var/template-ref-var.component';
import { ValueBindingComponent } from './value-binding/value-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { FontResizeComponent } from './twoway-binding/font-resize/font-resize.component';
import { TestNgIfComponent } from './test-ng-if/test-ng-if.component';
import { TestNgForComponent } from './test-ng-for/test-ng-for.component';
import { TestNgSwitchComponent } from './test-ng-switch/test-ng-switch.component';
import { ParentAndChildComponent } from './parent-and-child/parent-and-child.component';
import { ChildComponent } from './parent-and-child/child/child.component';
@NgModule({
  declarations: [
    AppComponent,
    TemplateInterpolationComponent,
    TemplateRefVarComponent,
    ValueBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent,
    FontResizeComponent,
    TestNgIfComponent,
    TestNgForComponent,
    TestNgSwitchComponent,
    ParentAndChildComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
