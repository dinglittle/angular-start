import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { TestNgOnChangeComponent } from './test-ng-on-change/test-ng-on-change.component';
import { ChildComponent } from './test-ng-on-change/child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    LifeCycleComponent,
    TestNgOnChangeComponent,
    ChildComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
