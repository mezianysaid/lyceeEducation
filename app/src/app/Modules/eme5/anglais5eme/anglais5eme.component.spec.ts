import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anglais5emeComponent } from './anglais5eme.component';

describe('Anglais5emeComponent', () => {
  let component: Anglais5emeComponent;
  let fixture: ComponentFixture<Anglais5emeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Anglais5emeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Anglais5emeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
