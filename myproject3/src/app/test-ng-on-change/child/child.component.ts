import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  //这边暴露了  属性 , 在父组件 就可以传值
  @Input()
  public userName:string="";

  @Input()
  public userObj:any={};
  

  constructor() { }


  ngOnInit() {
  }

  //测试 ngOnChange 事件,只有在 @Input 才会触发
  ngOnChanges(){
    //当 userObj 改变的时候 不执行 , 
    //userName 变的时候 执行,因为 userName='' 改变是重新生成了新的 userName="123"
    console.log('子组件===ngOnChange...');
  }

  //这个检测事件会拦截所有的事件，定时器，Ajax请求等，执行拦截回调，
  //当有变化的时候就会以执行 回调
  ngDoCheck(){
    console.log('子组件===ngDoCheck');
  }

  //当组件 已经  Init 初始化之后 ，不可以再使用 Init 更改组件的相关 属性，否则会报错
  // ngAfterViewInit(){
  //   this.userName = 'new name';
  // }

  // ngAfterViewChecked(){
  //   this.userName = 'new name';
  // }

}
