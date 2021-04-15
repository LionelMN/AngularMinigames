import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RockpaperscizorComponent } from './rockpaperscizor.component';

describe('RockpaperscizorComponent', () => {
  let component: RockpaperscizorComponent;
  let fixture: ComponentFixture<RockpaperscizorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RockpaperscizorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RockpaperscizorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
