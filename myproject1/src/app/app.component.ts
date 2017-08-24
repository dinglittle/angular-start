import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}


//创建一个 Hero 类,它具有 id 和 name 属性.现在把下列代码放在 app.component.ts 的顶部，仅次于 import 语句。
export class Hero{
  id:number;
  name:string;
}

// hero: Hero = {
//   id:1,
//   name:'name'
// }


