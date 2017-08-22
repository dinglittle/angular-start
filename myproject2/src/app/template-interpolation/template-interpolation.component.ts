import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'template-interpolation',
  templateUrl: './template-interpolation.component.html',
  styleUrls: ['./template-interpolation.component.css']
})
export class TemplateInterpolationComponent implements OnInit {
  public title:string = "假的内容";
  constructor() { }

  ngOnInit() {
  }

  public getVal():number{
    return 65535;
  }

}
