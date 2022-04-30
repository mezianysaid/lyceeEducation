import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bak2Component } from './bak2.component';

describe('Bak2Component', () => {
  let component: Bak2Component;
  let fixture: ComponentFixture<Bak2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bak2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bak2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
