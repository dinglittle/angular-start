import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'template-interpolation',
  templateUrl: './template-interpolation.component.html',
  styleUrls: ['./template-interpolation.component.css']
})

export class TemplateInterpolationComponent implements OnInit {
  private title:string = "假的内容";

  public title2:string='test2';

  public title3:string;

  public hero:object = {
    id:1,
    name:'lwj'
  }
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
