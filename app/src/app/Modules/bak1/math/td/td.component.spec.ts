import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TDComponent } from './td.component';

describe('TDComponent', () => {
  let component: TDComponent;
  let fixture: ComponentFixture<TDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
