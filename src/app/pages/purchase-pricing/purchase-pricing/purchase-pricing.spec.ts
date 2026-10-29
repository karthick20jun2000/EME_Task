import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasePricing } from './purchase-pricing';

describe('PurchasePricing', () => {
  let component: PurchasePricing;
  let fixture: ComponentFixture<PurchasePricing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchasePricing],
    }).compileComponents();

    fixture = TestBed.createComponent(PurchasePricing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
