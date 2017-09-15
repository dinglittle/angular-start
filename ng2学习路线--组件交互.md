
### 组件交互

 - 父子组件之间的交互（@Input/@Ouput/模板变量/@ViewChild)

 - 非父子组件之间的交互（Service/localStorage)

 - 还可以利用 Session、路由参数来进行通讯，请展开自己的想象 
 
 
 
通过  @ViewChild 

通过	Service/localStorage


----------------------
父组件 调用 子 组件方法

方法一：

通过 页面绑定
<child #child></child>
<button (click)="child.childFn()">childFn</button>





方法二：

需要 ViewChild 支持
import { ViewChild, AfterViewInit} from '@angular/core'

//导入  ChildComponent
import { ChildComponent } from './child/child.component';

//通过 ViewChild 接收

@ViewChild(ChildComponent)
private childComponent:ChildComponent;

//页面加载完毕执行  (生命周期)
ngAfterViewInit(){
	this.childComponent.childFn();
}