import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParchisComponent } from './parchis.component';

describe('ParchisComponent', () => {
  let component: ParchisComponent;
  let fixture: ComponentFixture<ParchisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParchisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParchisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
