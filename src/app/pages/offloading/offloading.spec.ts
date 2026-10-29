import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Offloading } from './offloading';

describe('Offloading', () => {
  let component: Offloading;
  let fixture: ComponentFixture<Offloading>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Offloading],
    }).compileComponents();

    fixture = TestBed.createComponent(Offloading);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
