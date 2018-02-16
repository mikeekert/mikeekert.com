import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-landing-main',
  templateUrl: './landing-main.component.html',
  styleUrls: ['./landing-main.component.scss']
})
export class LandingMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.vh-fix').each(function(){
      const h = $(this).height();
      $(this).height(h);
     });
  }
}
