import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'font-resize',
  templateUrl: './font-resize.component.html',
  styleUrls: ['./font-resize.component.css']
})
export class FontResizeComponent implements OnInit {

  // @Input 可以让父组件 传值过来
  // @Output 可以向父组件  发射一个事件
  //定义一个 父组件 传值过来的接收变量 ， number 或者 string 类型
  @Input() size:number|string;
  //子组件 自己定义一个 向父组件 广播的 事件
  @Output() sizeChange = new EventEmitter<number>();


  constructor() { }

  ngOnInit() {
  }

  dec() {this.resize(-1)}
  inc() {this.resize(+1)}

  resize(delta:number){
    console.log(this.size);
    this.size = Math.min(40,Math.max(8,+this.size + delta));
    this.sizeChange.emit(this.size);
    console.log(this.size);
  }

}
