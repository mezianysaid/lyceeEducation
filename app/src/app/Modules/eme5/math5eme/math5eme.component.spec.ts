import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Math5emeComponent } from './math5eme.component';

describe('Math5emeComponent', () => {
  let component: Math5emeComponent;
  let fixture: ComponentFixture<Math5emeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Math5emeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Math5emeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
