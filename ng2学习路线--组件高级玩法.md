### 组件的高级玩法
---

#### - [动态组件](#动态组件)

#### - [ShadowDOM](#ShadowDOM)

#### - 内容投影

#### - ViewChild与ContentChild

---
### 本节对应的实例代码

http://git.oschina.net/mumu-osc/learn-component


---
# 动态组件
### 动态组件

	- 如何创建动态组件的实例?
	
	- 如何给动态组件传参数?
	
	- 如何监听动态组件的事件?
	
	- 如何销毁动态创建的组件实例?
	

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
		//提供第二个参数 ,用来标志它是第几个显示
		this.comp2 = this.dyncontainer.createComponent(childComp,0);
	}
	
	
	我们还需要在 app.module.ts 中手动 注入 ,否则会报错
	entryComponents:[ChildOneComponent]
	
	
### 父子组件传递事件

#### 动态传参 title

	- 子组件中默认有 title , 父组件要动态给子组件传 title 
	
	- 需要要已经在父组件中动态组件
	
	```
		//动态创建出来的 组件无法使用 input 方式 传值
		this.comp1.instance.title = "父组件动态赋值的标题";
	```
	
	- 这样在父组件中的通过上面的方法就可以动态更改子组件的title了

#### 父组件中捕获子组件的事件

	- 子组件中有 click 事件,需要通过 `EventEmitter` 将事件广播出去
	
		```
			需要 @Ouput 和 EventEmitter 支持
			import { Component, OnInit, Output, EventEmitter } from '@angular/core';
			//先定义事件
			@Output()
			public myEvent:EventEmitter<string>=new EventEmitter<string>();
			public myEvent2:EventEmitter<number>=new EventEmitter2<number>();
			
			//点击事件
			public sayHello(){
				this.myEvent.emit("这里是子组件emit触发的事件");
				this.myEvent2.emit(123);
			}			
		```
		
	- 在父组件中 监听子组件 emit(发射) 的事件
	
		```
			ngAfterContentInit()
			//监听子组件emit的事件
			//这里的 subscribe(订阅) 是 rxjs
			this.comp1.instance.myEvent.subscribe((data)=>{
				console.log(data);
			});
			
			this.comp1.instance.myEvent2.subscribe((data)=>{
				console.log(data);
			});
		```
		
#### 父组件删除动态创建的组件

		```
			//删除动态 创建的组件
			public delComp():void{
				//destory 破坏
				this.comp1.destory();
			}
		```
		
---
# ShadowDOM
### ShadowDOM (影子DOM)
	
	- 实例演示 Angular 封装 HTML 模板和 CSS 的3种方式
	
#### test-shadow-dom

### 内容投影 

 - 最基本的 ng-content 用法

 - 用 projection slots 投影多块内容

 - 把自定义组件投影进去

 - 事件的处理方法 
	
	
	父子组件,在子组件中添加  `<ng-content></ng-content>` 占位,在父组件中插入子组件,在子组件中直接输入内容
	
	通过在 子组件中加入 `select`属性,来选择 `<ng-content></ng-content>`绑定的 DOM , `<ng-content select="h3"></ng-content>"
	
	`<ng-content select="test-class"></ng-content>` `select`标识的就是从父组件 传的 可以是 选择器 类名   
	
	
	ng-content 传事件 子组件中有定义的事件 通过 EventEmitter 广播出去,在父组件 中 监听子组件的事件,获取到子组件传出来的 事件
	
	```
		子组件
		<button class="btn btn-success">sayHello</button>
		
		@import { Component, OnInit, Output, EventEmitter }  from '@angular/core';
		
		@Output()
		public sayHello:EventEmitter<string> = new EventEmitter<string>();
		//这里定义的广播事件
		
		public sayHello():void{
			this.sayhello.emit("派发事件。。。");
		}
		
		
		父组件 
		<child-tree (sayHello)="doSomething($event)"></child-three>
		//这里必须  有参数 $event , 只有 $event 才能获取到 传参
		
		public  doSomething(data):void{
			console.log(data);
		}
		
	```

 ---	
	
 ### ContentChild 和 ViewChild
 
 - 用 @ContentChild 操作投影的内容
 
 - 用 @ContentChildren 批量操作多块投影内容
 
 - 用 @ViewChild 操作视图子节点
 
 - 用 @ViewChildren 批量操作多个视图子节点
 
 
 