import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'template-interpolation',
  templateUrl: './template-interpolation.component.html',
  styleUrls: ['./template-interpolation.component.css']
})

// export class Hero{
//   id:number;
//   name:string;
// }


export class TemplateInterpolationComponent implements OnInit {
  private title:string = "假的内容";

  public title2:string='test2';

  public title3:string;

  public hero:object = {
    id:1,
    name:'lwj'
  }

  
  // 定义 英雄 列表
  public heros = [
    {id:11,name:'Mr Nice'},
    {id:12,name:'Narco'},
    {id:13,name:'Bombasto'},
    {id:14,name:'Celeritas'},
    {id:15,name:'Dr IQ'},
  ]

  
  constructor() { }

  ngOnInit() {
  }

  public getValue():void{
    alert(this.title);
  }

  private setValue(str):void{
    this.title = str;
    console.log(this.title);
  }

}




