import { Component, OnInit, ContentChild } from '@angular/core';
import { ChildFiveComponent } from '../child-five/child-five.component';
@Component({
  selector: 'child-four',
  templateUrl: './child-four.component.html',
  styleUrls: ['./child-four.component.scss']
})
export class ChildFourComponent implements OnInit {
  @ContentChild(ChildFiveComponent)
  childFive:ChildFiveComponent

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    //这里拿到被投影进来的实例,那么 该实例上所有的方法都可以 获取到
    console.log(this.childFive);
  }

}
