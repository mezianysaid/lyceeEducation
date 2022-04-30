import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TDs5emeComponent } from './tds5eme.component';

describe('TDs5emeComponent', () => {
  let component: TDs5emeComponent;
  let fixture: ComponentFixture<TDs5emeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TDs5emeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TDs5emeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
