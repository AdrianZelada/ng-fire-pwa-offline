import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleMoneyComponent } from './handle-money.component';

describe('HandleMoneyComponent', () => {
  let component: HandleMoneyComponent;
  let fixture: ComponentFixture<HandleMoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandleMoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandleMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
