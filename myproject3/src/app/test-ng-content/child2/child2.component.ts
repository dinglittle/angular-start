import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    console.log("子组件 ngAfterContentInit...");
  }
  ngAfterContentChecked(){
    console.log("子组件 ngAfterContentInit...");
  }

}
