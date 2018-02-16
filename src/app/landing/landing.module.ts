import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingMainComponent } from './landing-main/landing-main.component';
import { LandingAboutmeComponent } from './landing-aboutme/landing-aboutme.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LandingMainComponent, LandingAboutmeComponent],
  exports: [LandingMainComponent, LandingAboutmeComponent]
})
export class LandingModule { }
