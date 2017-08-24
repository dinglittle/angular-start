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



