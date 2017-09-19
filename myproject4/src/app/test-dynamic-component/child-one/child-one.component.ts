import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent implements OnInit {
  public title:string="默认的标题";

  //定义事件
  @Output()
  public myEvent:EventEmitter<string>=new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public sayHello(){
    this.myEvent.emit("这里是子组件emit触发的事件");
  }

}
