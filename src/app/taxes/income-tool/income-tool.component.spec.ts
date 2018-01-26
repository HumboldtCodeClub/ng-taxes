import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeToolComponent } from './income-tool.component';

describe('IncomeToolComponent', () => {
  let component: IncomeToolComponent;
  let fixture: ComponentFixture<IncomeToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
