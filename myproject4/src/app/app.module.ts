import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TestDynamicComponentComponent } from './test-dynamic-component/test-dynamic-component.component';
import { ChildOneComponent } from './test-dynamic-component/child-one/child-one.component';


@NgModule({
  declarations: [
    AppComponent,
    TestDynamicComponentComponent,
    ChildOneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ChildOneComponent]
})
export class AppModule { }
