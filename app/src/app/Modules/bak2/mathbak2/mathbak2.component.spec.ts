import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mathbak2Component } from './mathbak2.component';

describe('Mathbak2Component', () => {
  let component: Mathbak2Component;
  let fixture: ComponentFixture<Mathbak2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mathbak2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mathbak2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
