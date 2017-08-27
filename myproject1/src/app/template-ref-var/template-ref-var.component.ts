import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'template-ref-var',
  templateUrl: './template-ref-var.component.html',
  styleUrls: ['./template-ref-var.component.css']
})
export class TemplateRefVarComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }

  //定义 sayHello 方法
  /**
   * sayHello
   */
  public sayHello(name:string):void {
    alert(name);
  }

}
