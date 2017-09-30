import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'child-three',
  templateUrl: './child-three.component.html',
  styleUrls: ['./child-three.component.scss']
})
export class ChildThreeComponent implements OnInit {

  @Output()
  public sayhello:EventEmitter<string> = new EventEmitter<string>();
  //这里定义的 广播事件

  constructor() { }
 
  ngOnInit() {
  }

  public sayHello():void{
    this.sayhello.emit("派发事件");
  }

}
