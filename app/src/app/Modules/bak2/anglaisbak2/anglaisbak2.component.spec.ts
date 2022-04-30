import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anglaisbak2Component } from './anglaisbak2.component';

describe('Anglaisbak2Component', () => {
  let component: Anglaisbak2Component;
  let fixture: ComponentFixture<Anglaisbak2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Anglaisbak2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Anglaisbak2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
