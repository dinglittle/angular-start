import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { TestNgOnChangeComponent } from './test-ng-on-change/test-ng-on-change.component';
import { ChildComponent } from './test-ng-on-change/child/child.component';
import { TestNgContentComponent } from './test-ng-content/test-ng-content.component';
import { Child2Component } from './test-ng-content/child2/child2.component';


@NgModule({
  declarations: [
    AppComponent,
    LifeCycleComponent,
    TestNgOnChangeComponent,
    ChildComponent,
    TestNgContentComponent,
    Child2Component,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
