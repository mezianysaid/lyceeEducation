import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Philosophybak2Component } from './philosophybak2.component';

describe('Philosophybak2Component', () => {
  let component: Philosophybak2Component;
  let fixture: ComponentFixture<Philosophybak2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Philosophybak2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Philosophybak2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
