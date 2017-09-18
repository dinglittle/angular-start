 ### 生命周期
 
 - 生命周期钩子概述
 
 - 实例讲解每个 钩子
 
 
 -----
 ![image](https://user-images.githubusercontent.com/17232138/30470629-0b6a9ef4-9a28-11e7-90bb-ba20b43d4978.png)

 
 constructor   (构造函数)不算钩子，钩子只有下面的8个
 
 ngOnChanges		有可能多次
 
 ngOnInit			只调用一次
 
 ngDoCheck			有可能多次
 
	ngAfterContentlnit 只调用一次
 
	ngAfterContentChecked	有可能多次
 
	ngAfterViewInit	只调用一次
 
	ngAfterViewChecked 有可能多次
 
 ngOnDestory		只调用一次
 
 
 
 调用多次的 交互过程中  可能多次调用
 
 Conent(内容) 和 View(视图) 只能用在组件上，因为指令是不能带有视图的，只有组件可以带视图
 
 (Angular新版本里面,指令是不能带有视图的)  组件是特殊的指令
 
 ### 组件是带有视图的指令
 ![image](https://user-images.githubusercontent.com/17232138/30527557-d815356e-9c5c-11e7-9039-44e219ea5884.png)

 ---
 
 ### ngOnChanges
 
 - @Input 属性发生变化的时候被调用
 
 - 非@Input 属性改变不会调用ngOnChanges
 
 ### ngDoCheck (检测)
 
 - 每发生一次变更检测就会被调用一次！
 
 - 谁在负责触发变更尼？(Zones,它拦截了所有问题:定时器、事件、Ajax)
 
 - 不要在ngDoCheck里面做非常消耗性能的事情，会卡死的
 
 ### 变更检测的两种策略
 
 - Default:无论哪个组件发生了变化，从根组件开始全局遍历调用 ngDoCheck()
 
 - OnPush:只有当组件的 @Input 属性发生变化的时候才调用本组件的 ngDoCheck()
 
 #### ChangeDetectionStrategy.default (变更安全检测策略 - default)
 ![image](https://user-images.githubusercontent.com/17232138/30527567-fbdb52da-9c5c-11e7-9833-c59afefbdc72.png)

 
 #### ChangeDetectionStrategy.onPush  (变更检测策略 - push)
 ![image](https://user-images.githubusercontent.com/17232138/30527571-0b7ca95a-9c5d-11e7-9207-b5725018d340.png)

 
 ### ngAfterContentInit/ngAfterContentChecked (内容初始化后/内容检测后)
 
 - 投影内容装配完成的时候整个模板还没装配完
 
 - 所以，在这两个钩子里面可以修改被绑定的属性
 
 #### ngAfterContentInit/ngAfterContentChecked 
 ![image](https://user-images.githubusercontent.com/17232138/30527543-b40d8a68-9c5c-11e7-967c-2af047b96f69.png)
 
 ### ngAfterViewInit/ngAfterViewChecked (视图初始化后/视图检测后)
 
 - 在组件视图装配的时候调用这两个钩子
 
 - 视图的装配过程是从子组件向父组件依次进行的
 
 - 在这两个钩子里面不能再修改组件上被绑定的属性，否则Angular会抛异常
 
 - ngAfterViewChecked 可能会被调用非常多次，如果没有使用 OnPush 策略，所有实现 
	
	了这个钩子的组件都会被调用，千万不要在这两个钩子里面做很多复杂的事件，会卡列死的！
	
 #### ngAfterViewInit/ngAfterViewChecked
 ![image](https://user-images.githubusercontent.com/17232138/30527688-f7c6a680-9c5d-11e7-9d60-9b5aaec8a0d4.png)

 ### 会反复执行的钩子
 
 ![image](https://user-images.githubusercontent.com/17232138/30527712-31e46186-9c5e-11e7-8146-c7a739d69710.png)

 