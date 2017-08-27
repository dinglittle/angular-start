import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'value-binding',
  templateUrl: './value-binding.component.html',
  styleUrls: ['./value-binding.component.css']
})
export class ValueBindingComponent implements OnInit {

  public imgSrc:string="./assets/imgs/1.jpg";
  constructor() { }

  ngOnInit() {
  }

  /**
   * changeSrc
   * 这个方法 切换 图片地址 不成功
   */
  public changeSrc():void {
    this.imgSrc = "./assets/imgs/2.jpg";
    // this.imgSrc = "./assets/imgs/1.jpg";
    console.log(this.imgSrc);

    
    
  }

 

}
