import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAdd5emeComponent } from './form-add5eme.component';

describe('FormAdd5emeComponent', () => {
  let component: FormAdd5emeComponent;
  let fixture: ComponentFixture<FormAdd5emeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAdd5emeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAdd5emeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
