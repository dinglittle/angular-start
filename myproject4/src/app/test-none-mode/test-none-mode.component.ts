import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'test-none-mode',
  encapsulation:ViewEncapsulation.None,//什么都不用模式
  templateUrl: './test-none-mode.component.html',
  styleUrls: ['./test-none-mode.component.scss']
})
export class TestNoneModeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
