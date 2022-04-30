import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Svtbak2Component } from './svtbak2.component';

describe('Svtbak2Component', () => {
  let component: Svtbak2Component;
  let fixture: ComponentFixture<Svtbak2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Svtbak2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Svtbak2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
