import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-landing-aboutme',
  templateUrl: './landing-aboutme.component.html',
  styleUrls: ['./landing-aboutme.component.scss']
})
export class LandingAboutmeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.vh-fix')
    .each(function () {
      const h = $(this).height() - 4;
      $(this).height(h);
    });
  }

}
