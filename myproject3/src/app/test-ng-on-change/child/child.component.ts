import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  //这边暴露了  属性 , 在父组件 就可以传值
  @Input()
  public userName:string="";

  @Input()
  public userObj:any={};
  

  constructor() { }


  ngOnInit() {
  }

  //测试 ngOnChange 事件,只有在 @Input 才会触发
  ngOnChanges(){
    console.log('子组件===ngOnChange...'+ this.userName);
  }

}
