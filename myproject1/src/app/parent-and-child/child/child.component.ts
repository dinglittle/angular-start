import { Component, OnInit, Input, Output,  EventEmitter } from '@angular/core';
// import { EventEmitter }  from '@anglar/eventemitter';
//导入@Input


@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  //定义一个私有的 _panelTitle
  private _panelTitle:string="我是子组件";

  //@Input 输入装饰器  
  //从父组件 获取
  @Input()

  //设置 子组件的 _panelTitle
  set panelTitle(panelTitle:string){
    this._panelTitle = '['+panelTitle+']';
  }

  //get
  get panelTitle():string{
    return this._panelTitle;
  }

  //@Output
  //向父组件 传(广播)值
  @Output()
  //新建 一个 事件  EventEmitter 事件触发器
  public follow=new EventEmitter<string>();

  constructor() { } 

  ngOnInit() {
  }

  public emitAnEvent():void{
    this.follow.emit("follow");
  }

  public childFn():void{
    alert("父组件调用子组件方法！");
  }

  private childFn2(num):void{
    alert(num);
    console.log('childFn2');
  }

}
