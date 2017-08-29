import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero:HeroDetailComponent.Hero;

  constructor() { }

  ngOnInit() {
  }

}
