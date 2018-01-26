import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GopTaxReformComponent } from './gop-tax-reform.component';

describe('GopTaxReformComponent', () => {
  let component: GopTaxReformComponent;
  let fixture: ComponentFixture<GopTaxReformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GopTaxReformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GopTaxReformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
