import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit {

  public logs:Array<any>=[];

  //constructor 构造函数不算钩子，
  constructor() {
    this.logs.push("constructor...");
   }

  ngOnInit() {
  }



}
