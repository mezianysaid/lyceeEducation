import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tdsbak2Component } from './tdsbak2.component';

describe('Tdsbak2Component', () => {
  let component: Tdsbak2Component;
  let fixture: ComponentFixture<Tdsbak2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tdsbak2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tdsbak2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
