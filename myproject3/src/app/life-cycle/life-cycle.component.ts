import { Component} from '@angular/core';

@Component({
  selector: 'life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
export class LifeCycleComponent{

  public logs:Array<any>=[];

  //constructor 构造函数不算钩子，
  constructor() {
    this.logs.push("constructor...");
   }

  ngOnInit() {
  }



}
