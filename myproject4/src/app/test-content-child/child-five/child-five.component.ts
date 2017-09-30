import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child-five',
  templateUrl: './child-five.component.html',
  styleUrls: ['./child-five.component.scss']
})
export class ChildFiveComponent implements OnInit {
  @Output ()
  public myevent:EventEmitter<string>=new EventEmitter<string>();
  
  public title:string="默认标题";
  public userName:string='';
  public password:string='';
  public age:number=18;

  constructor() { }

  ngOnInit() {
  }

  public sayHello():void{
    this.myevent.emit('派发事件...');
  }

}
