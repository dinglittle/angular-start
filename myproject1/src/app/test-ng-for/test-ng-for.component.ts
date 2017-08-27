import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-ng-for',
  templateUrl: './test-ng-for.component.html',
  styleUrls: ['./test-ng-for.component.css']
})
export class TestNgForComponent implements OnInit {

  public values:Array<any>=[1,2,3,4,5];
  public races:Array<any>=[
    {name:'人'},
    {name:'神'},
    {name:'灵'},
  ];
  

  constructor() { }

  ngOnInit() {
  }

}
