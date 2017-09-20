import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TestDynamicComponentComponent } from './test-dynamic-component/test-dynamic-component.component';
import { ChildOneComponent } from './test-dynamic-component/child-one/child-one.component';
import { TestShadowDomComponent } from './test-shadow-dom/test-shadow-dom.component';
import { TestEmulatedModeComponent } from './test-emulated-mode/test-emulated-mode.component';
import { TestNoneModeComponent } from './test-none-mode/test-none-mode.component';


@NgModule({
  declarations: [
    AppComponent,
    TestDynamicComponentComponent,
    ChildOneComponent,
    TestShadowDomComponent,
    TestEmulatedModeComponent,
    TestNoneModeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ChildOneComponent]
})
export class AppModule { }
