import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
//导入 子组件  遵循 大写规则
import { ChildComponent } from './child/child.component';
@Component({
  selector: 'parent-and-child',
  templateUrl: './parent-and-child.component.html',
  styleUrls: ['./parent-and-child.component.css']
})
export class ParentAndChildComponent implements OnInit {
  @ViewChild(ChildComponent)
  private childComponent:ChildComponent;

  constructor() { }

  ngOnInit() {
  }

    //通过 方法调用 从子组件 传进来的 方法
 ngAfterViewInit(){
   console.log('ngAfterView');
  this.childComponent.childFn();
}

  public panelTitle = 'fffffff';
  public doSomething():void{
    alert("收到了子组件的自定义事件！");

    
    // alert(follow);
  }



  



}
