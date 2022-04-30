import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Svt5emeComponent } from './svt5eme.component';

describe('Svt5emeComponent', () => {
  let component: Svt5emeComponent;
  let fixture: ComponentFixture<Svt5emeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Svt5emeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Svt5emeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
