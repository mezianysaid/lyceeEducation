import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formbak2Component } from './formbak2.component';

describe('Formbak2Component', () => {
  let component: Formbak2Component;
  let fixture: ComponentFixture<Formbak2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formbak2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Formbak2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
