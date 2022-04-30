import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bak1Component } from './bak1.component';

describe('Bak1Component', () => {
  let component: Bak1Component;
  let fixture: ComponentFixture<Bak1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bak1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bak1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
