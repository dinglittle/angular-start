import { Component } from '@angular/core';

import { Hero } from './hero';


// 创建英雄
const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  

  //暴露英雄
  heroes = HEROES;

  //未选择之前 初始化 
  selectHero:Hero;

  //改方法 将  点击的 hero 传递 给 this.selectHero
  onSelect(hero:Hero):void{
    this.selectHero = hero;
    console.log(this.selectHero);
  }

}

// 定义 Hero 类
// export class Hero {
//   id: number;
//   name: string;
// }
