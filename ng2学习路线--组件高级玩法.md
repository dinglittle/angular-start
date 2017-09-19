### 组件的高级玩法
---

#### - 动态组件

#### - ShadowDOM

#### - 内容投影

#### - ViewChild与ContentChild

---
### 本节对应的实例代码

http://git.oschina.net/mumu-osc/learn-component


---

父子组件的引用,不使用自动的方式,而改为手动形式

1.新建父组件,子组件

2.在父组件中不是直接引用子组件,而是通过另一个绑定形式, 

`<div #dynamic<div #dyncontainer></div>` 动态创建绑定

3.动态绑定需要先定义一个空位置,然后把创建好的子组件传进去
	
	需要手动在父组件中导入子组件
	
	`import { ChildOneComponent } from './child-one/child-one.component';`
	
	通过@ViewChild 
	
	```
		@ViewChild("dyncontainer", { read: ViewContainerRef })
		dyncontainer: ViewContainerRef;
		
		constructor(private resolver: ComponentFactoryResolver) {}
	```
	
	
	// 在 ngAfterContentInit 组件还未完毕的时候 手动操作
	ngAfterContentInit() {
		const childComp = this.resolver.resolveComponentFactory(ChildOneComponent);
		this.comp1 = this.dyncontainer.createComponent(childComp);
	}
	
	
	我们还需要在 app.module.ts 中手动 注入 ,否则会报错
	entryComponents:[ChildOneComponent]
	