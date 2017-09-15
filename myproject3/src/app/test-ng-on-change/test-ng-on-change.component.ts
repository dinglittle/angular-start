import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-ng-on-change',
  templateUrl: './test-ng-on-change.component.html',
  styleUrls: ['./test-ng-on-change.component.scss']
})
export class TestNgOnChangeComponent implements OnInit {

    
    public userName:string="";
  
    public userObj:any={};
  constructor() { }

  ngOnInit() {
  }

}
