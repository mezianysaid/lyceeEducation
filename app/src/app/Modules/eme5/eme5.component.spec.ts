import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eme5Component } from './eme5.component';

describe('Eme5Component', () => {
  let component: Eme5Component;
  let fixture: ComponentFixture<Eme5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Eme5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Eme5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
