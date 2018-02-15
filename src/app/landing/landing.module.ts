import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingMainComponent } from './landing-main/landing-main.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LandingMainComponent],
  exports: [LandingMainComponent]
})
export class LandingModule { }
