import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import * as AOS from 'aos';

@Component({selector: 'app-landing-main', templateUrl: './landing-main.component.html', styleUrls: ['./landing-main.component.scss']})
export class LandingMainComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    $('.vh-fix')
      .each(function () {
        const h = $(this).height();
        $(this).height(h);
      });
    AOS.init();

    $('a[href*="#"]')
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function (event) {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
          let target = $(this.hash);
          target = target.length
            ? target
            : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target
                .offset()
                .top
            }, 1000, function () {
              const $target = $(target);
              $target.focus();
              if ($target.is(':focus')) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            });
          }
        }
      });
  }
}
