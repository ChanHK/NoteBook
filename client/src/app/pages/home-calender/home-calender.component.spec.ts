import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCalenderComponent } from './home-calender.component';

describe('HomeCalenderComponent', () => {
  let component: HomeCalenderComponent;
  let fixture: ComponentFixture<HomeCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCalenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
