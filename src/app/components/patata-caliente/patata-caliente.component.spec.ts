import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatataCalienteComponent } from './patata-caliente.component';

describe('PatataCalienteComponent', () => {
  let component: PatataCalienteComponent;
  let fixture: ComponentFixture<PatataCalienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatataCalienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatataCalienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
