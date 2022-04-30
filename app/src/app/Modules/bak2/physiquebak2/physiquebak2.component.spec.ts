import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Physiquebak2Component } from './physiquebak2.component';

describe('Physiquebak2Component', () => {
  let component: Physiquebak2Component;
  let fixture: ComponentFixture<Physiquebak2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Physiquebak2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Physiquebak2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
