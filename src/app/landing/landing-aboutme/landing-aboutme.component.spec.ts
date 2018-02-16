import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingAboutmeComponent } from './landing-aboutme.component';

describe('LandingAboutmeComponent', () => {
  let component: LandingAboutmeComponent;
  let fixture: ComponentFixture<LandingAboutmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingAboutmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingAboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
