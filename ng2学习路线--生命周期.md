 生命周期
 
 - 生命周期钩子概述
 
 - 实例讲解每个 钩子
 
 
 -----
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
 
 ---
 
 ### 