### 内容提要



#### 组件

TS代码、模板（数据绑定、事件绑定）、外观与动效、把服务注入给组件

- 组件间通讯
@Input与 @Output、借助于 Service（事件总线）、其他通讯方式

- 生命周期钩子

- 管道


步骤
```
styles.css  引入 样式 
@import "~bootstrap/dist/css/bootstrap.min.css";
字体图标
@import "~font-awesome/css/font-awesome.min.css";
```

编译启动
-o 使用默认的浏览器打开
`ng serve -o`  


----
组件 
```
app -> home -> social-channel -> 
social-channel.component.ts  //组件定义文件
```

重点在模板 
@Component 内

selector 选择器


时间 站点统计
sitstat


组件间通讯
    @Input
    @Ouput

    service(事件总线)

    其他通讯方式


---
* 5.1模板语法 *
---

-_把CSS预编译成SASS_

	在 .angular-cli.josn 中更改 “styles" "styles.css" 为 ”styles.scss"
	
	更改主入口  style.css  为  sylte.scss
	
	"bootstrap":"^3.3.7",
	"font-awsome":"^4.7.0"   字体图标
	
	为 package.json  dependencies（依赖，相关）增加 

-_导入Bootstrap 和 fontawesome详细过程_

	在 styles.scss 中引入 bootstrap.css

	@import "~bootstrap/dist/css/bootstrap.min.css";
	@import "~font-awesome/css/font-awesome.min.css";

	
	更改 app.component.html 文件 

	http://www.bootcss.com/		组件
	http://fontawesome.io/icons/		图标


-_创建新的组件_

	ng g c TemplateInterpolation
	驼峰法命名（自动创建）
	自动导入到 app.module.ts 中


	创建完成的组件 自带 app 前缀 ， 在 .angular-cli.json 中 删除 prefix:'app' 就没了

	更改 定义的 组件 html

	在app.component.html 中引入 自定义的 组件 （方式和普通标签一样）
	
		<template-interpolation>

	  	</template-interpolation>



-_插值语法和表达式_

	在 template-interpolation.component.ts 中定义

	public title:string = "假的内容";
	
	在 模板中 使用 {{title}}

	方法的引用方式 ，同上 需先定义
		//类型  方法名  返回值类型
		public getVal():number{
    		return 65535;
  		}
	在模板页面中引用
		{{getVal()}}

	-- 引用 局部变量
	1）先在 ts 定义方法
		public sayHello(name:string):void{
    		alert(name)
  		}
	2）在模板页面中引用

		<input #heroInput>
    	<p>{{heroInput.value}}</p>
    	<button class="btn btn-sucess" (click)="sayHello(heroInput.value)">局部变量</button>

		这里 #heroInput 作为id(标志)  
		（click)=“sayHello(heroInput.value)”  绑定方法
		{{heroInput.value}}  显示 input 输入的内容


---
### 简介
---
### 技术思路

	对只读数据使用单向数据绑定

	添加一些可编辑字段，并通过双向数据绑定更新模型

	把组件上的方法绑定到用户事件上，比如按键和点击

### 构建思路
	
	- DashBoard(仪表盘) 视图
		用来展示英雄
	
	- 仪表盘顶部有两上链接 “Dashboard（仪表盘）” 和  “Heroes(英雄列表)” . 我们将点击它在 “仪表盘” 和 ”英雄列表“ 视图之间导航。
	
	- 当我们点击仪表盘上名叫"Magneta"的英雄时，跌幅把我们带到这个英雄的详情页，在这里，我们可以修改英雄的名字。
	
	- 点击 "Back(后退)" 按钮将返回到 "Dashboard(仪表盘)" .顶部的链接可以把我们带 到时任何一个主视图。
		
	  如果我们点击”Heros(英雄列表)“链接，应用将把我们带到”英雄“主列表视图。
	  
	- 当我们点击另一们英雄时，一个只读的”微型详情视图“会显示在列表下方，以体现我们的选择。
	   
	  我们可以点击"View Details(查看详情)" 按钮进入所选英雄的编辑视图.
	  

---



<input [(ngModel)]="hreo.name" placeholder="name">

[(ngModel)]是一个Angular语法，用与把 hero.name 绑定到输入框中。 它的数据流是双向的，从属性到输入框，并且输入框回到属性。

ngModel是Angular默认的指令 ，但是默认情况下却是不可用的。它属于一个可选模块 `FormsModule` 。

#### 导入 FormsModule

打开 `app.module.ts` 文件，并且从 `@angular/forms` 库中导入符号 `FormsModule`。然后把 `FormsModule`。

然后把 `FormsModule` 添加到`@NgModule`元数据的`imports`数据中，它是当前应用正在使用的外部模块列表。

修改后的 `AppModule` 是这样的

```
	import { NgModule }      from '@angular/core';
	import { BrowserModule } from '@angular/platform-browser';
	import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
	 
	import { AppComponent }  from './app.component';
	 
	@NgModule({
	  imports: [
		BrowserModule,
		FormsModule // <-- import the FormsModule before binding with [(ngModel)]
	  ],
	  declarations: [
		AppComponent
	  ],
	  bootstrap: [ AppComponent ]
	})
	export class AppModule { }
```

---

### 主从结构

#### ngFor 遍历
 ```
	/**
	*	ngFor 的 * 前缀表示 <li> 及其子元素组成了一个主控模板
	*	ngFor 指令在 AppComponent.heros 属性返回的 heros 数组上迭代，并输出此模板的实例。
	*	引号中赋值给 ngFor 的那段文本表示 “从heros数组中取出每个英雄，存入一个局部的 hero 变量，并让它在相应的模板实例中可用”
	*/	
	<li *ngFor=="let hero of heros">
 ```
 
 ### 三种数据绑定方式

	- - 值绑定 、事件绑定、 双向绑定 

	值绑定
		{{value}}

	注意：
		模板中的标签化 严格，比如 在 <p> 标签内是不能包含 另一个 <p> 的，否则会被提前 结束 
		
		`[]`  将 img 的图片地址绑定为变量
		`<img [src] = "imgSrc">`

	
	事件绑定

	 	```
			<button (click)="sayHello($event)">点击</button>
		 ```

	双向绑定
		[()]

		生成 组件 带路径 ， 生成的组件在指定的目录下

		```
			//生成的 font-resize 组件 在 twoway-binding 目录下
			ng g c twoway-binding/FontResize
		```

		1）双向绑定是指，在父子组件间发生的，父组件绑定一个值，并且传给子组件，子组件改变值之和，回传给父组件的过程，这一切 接收和广播值都是由子组件完成的，父组件只需要绑定 需要绑定的值（初始化的值  子组件改变后返回的值）即可
			双向绑定需要  
			app.module.ts 中导入 @angular/forms
			// ngModule 支持
			import { FormsModule } from '@angular/forms';
			//子组件
			import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';
			
			@Input 可以接收一个父组件发送过来的值
			@Ounput 可以向父组件 广播一个事件（这个事件需要 `EventEmitter` 支持

			//接收 父组件的传值
			@Input() size:number | string;
			//定义一个事件，用来广播给父组件
			@Ouput() sizeChange = new EventEmitter();

			//子组件 .html
			<button (click)="inc()" title="smaller">加大字体</button>
			<button (click)="dec()" title="bigger">减小字体</button>
			<label [style.font-size.px]="size">FontSize:{{size}}</label>

			//子组件 .ts
			//两个方法，一个用来增加，另一个用来减少
			dec() {this.resize(-1)}
  			inc() {this.resize(+1)}

			//上面定义的用来 广播给父组件的事件
			resize(delta:number){
				console.log(this.size);
				this.size = Math.min(40,Math.max(8,+this.size + delta));
				this.sizeChange.emit(this.size);
				console.log(this.size);
			}


			父组件 .html
				<h2>双向绑定</h2>
				<!--这里将  fontSizePx 传递给子组件  -->
				<font-resize [(size)]="fontSizePx">

				</font-resize>
				<!--这里  会接收到 子组件 返回的字体大小 ， 并且 改变 页面的 字体大小  -->
				<div [(style.font-size.px)]="fontSizePx">Resizeable Text</div> 
				<div [style.font-size.px]="fontSizePx">Resizeable Text</div>   

			父组件 .ts
			只需定义初始化的值
				public fontSizePx:number=16;

### 内置结构型指令用法：*ngIf、*ngFor、*ngSwitch
	*ngIf 显示
		*ngIf 同其他判断显示问题，通过判断条件来控制，不同的是，*ngIf 为false的时候，DOM中的元素是直接删除的 ( ng2特性 )



### 内置熟悉型指令用法：NgClass、NgStyle、NgModel


### 小工具：管道、安全导航、非空断言

