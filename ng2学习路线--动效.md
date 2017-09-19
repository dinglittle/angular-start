### 动效
---

### 动效概述

	- Angular动效遵守的规范 https://w3c.github.io/web-animations/
	
	- 浏览器支持情况 http://caniuse.com/#feat=web-animation
	
	- Animations 包不在 core 里面，记得独立 import
	
	
### Angualr 动效的构成	

![image](https://user-images.githubusercontent.com/17232138/30534201-b4922402-9c8f-11e7-87f5-dedb1f74f850.png)

### Angular 动效的构成 

	```
		state('inactive',style({
			backgroundColor:'#eee',
			transform:'scale(1)'
		})),
		state('active',style({
			backgroundColor:'#cfd8dc',
			transform:'scale(1.1)'
		})),
	```
### Angular 动效的构成 

	```
		transition('inative => active',animate('100ms ease-in')),
		transition('active => inactive',animate('100ms ease-out'))
	```
