import { Component, OnInit, ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'test-emulated-mode',
  encapsulation:ViewEncapsulation.Emulated,//默认就是 Emulated 模拟
  templateUrl: './test-emulated-mode.component.html',
  styleUrls: ['./test-emulated-mode.component.scss']
})
export class TestEmulatedModeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
