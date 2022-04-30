import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Philosophy5emeComponent } from './philosophy5eme.component';

describe('Philosophy5emeComponent', () => {
  let component: Philosophy5emeComponent;
  let fixture: ComponentFixture<Philosophy5emeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Philosophy5emeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Philosophy5emeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
