import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HireMePageComponent } from './hire-me-page.component';

describe('HireMePageComponent', () => {
  let component: HireMePageComponent;
  let fixture: ComponentFixture<HireMePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HireMePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HireMePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
