import { Component ,Input} from '@angular/core';

@Component({
  selector: 'life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
export class LifeCycleComponent{
  //@Input 是 Componet 中的 
  @Input()
  public title:string="";


  //数组 需要  泛型 <any>
  public logs:Array<any>=[];

  //constructor 构造函数不算钩子， 钩子只有8个
  constructor() {
    this.logs.push("constructor...");
   }

  ngOnChanges(){
    // console.log(this.logs);
    console.log('ngOnChanges');
    this.logs.push("ngOnChanges...");
  }

  ngOnInit() {
    // console.log(this.logs);
    console.log('ngOnInit');
    this.logs.push("ngOnInit...");
  }

  ngDoCheck(){
    // console.log(this.logs);
    console.log('ngDoCheck');
    this.logs.push("ngDoCheck...");
  }

  ngAfterContentInit(){
    // console.log(this.logs);
    console.log('ngAfterContentInit');
    this.logs.push("ngAfterContentInit...");
  }

  ngAfterContentChecked(){
    // console.log(this.logs);
    console.log('ngAfterContentChecked');
    this.logs.push("ngAfterContentChecked...");
  }

  ngAfterViewInit(){
    // console.log(this.logs);
    console.log('ngAfterViewInit');
    this.logs.push("ngAfterViewInit...");
  }

  ngAfterViewChecked(){
    // console.log(this.logs);
    console.log('ngAfterViewChecked');
    this.logs.push("ngAfterViewChecked...");
  }

  ngOnDestroy(){
    // console.log(this.logs);
    console.log('ngOnDestroy');
    this.logs.push("ngOnDestroy...");
  }

}
