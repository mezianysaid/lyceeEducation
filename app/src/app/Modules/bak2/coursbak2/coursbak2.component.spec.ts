import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coursbak2Component } from './coursbak2.component';

describe('Coursbak2Component', () => {
  let component: Coursbak2Component;
  let fixture: ComponentFixture<Coursbak2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Coursbak2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Coursbak2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
