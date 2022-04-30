import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Physique5emeComponent } from './physique5eme.component';

describe('Physique5emeComponent', () => {
  let component: Physique5emeComponent;
  let fixture: ComponentFixture<Physique5emeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Physique5emeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Physique5emeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
