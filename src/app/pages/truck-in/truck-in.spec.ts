import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckIn } from './truck-in';

describe('TruckIn', () => {
  let component: TruckIn;
  let fixture: ComponentFixture<TruckIn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TruckIn],
    }).compileComponents();

    fixture = TestBed.createComponent(TruckIn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
