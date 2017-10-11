import { Component } from '@angular/core';

import { Hero } from './hero';



// 在多个组件中使用 HeroService 服务
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  // 添加一个尚未初始化的 heroes 属性
  heroes: Hero[];
  //暴露英雄
  // heroes = HEROES;

  //未选择之前 初始化 
  selectHero:Hero;

  //改方法 将  点击的 hero 传递 给 this.selectHero
  onSelect(hero:Hero):void{
    this.selectHero = hero;
    console.log(this.selectHero);
  }

  //  注入 HeroService
  // 你可以用两行代码替用 new 时的一行
  //  - 添加一个构造函数,并定义一个私有属性
  //  - 添加组件的 providers 元数据
  //
  // 添加构造函数
  // 构造函数什么也不用做,它在参数中定义了一个私有的 heroService 属性,并把它标记为注入 HeroService 的靶点
  // 现在,当创建 AppComponent 实例时,Angular 知道需要先提供一个 HeroService 实例.
  constructor(private heroService:HeroService){

  }

}

// 定义 Hero 类
// export class Hero {
//   id: number;
//   name: string;
// }
