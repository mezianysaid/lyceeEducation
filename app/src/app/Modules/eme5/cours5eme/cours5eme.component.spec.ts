import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cours5emeComponent } from './cours5eme.component';

describe('Cours5emeComponent', () => {
  let component: Cours5emeComponent;
  let fixture: ComponentFixture<Cours5emeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cours5emeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cours5emeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
