import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-template',
  templateUrl: './my-template.component.html',
  styleUrls: ['./my-template.component.css']
})




export class MyTemplateComponent implements OnInit {
  //实例化 hero
  // public hero: Hero = { id: 1, name: 'lwj' }

  //定义 英雄列表数据
  public heroes: Array<any> = [
    { name: '白起', value: 10 },
    { name: '曹操', value: 11 },
    { name: '关羽', value: 12 },
    { name: '李白', value: 13 },
    { name: '二郎神', value: 14 },
    { name: '五官中郎将', value: 15 },
  ]

  constructor() { }

  ngOnInit() {
  }

}
