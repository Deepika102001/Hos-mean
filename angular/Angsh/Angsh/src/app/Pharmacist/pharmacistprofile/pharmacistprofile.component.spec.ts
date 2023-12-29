import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistprofileComponent } from './pharmacistprofile.component';

describe('PharmacistprofileComponent', () => {
  let component: PharmacistprofileComponent;
  let fixture: ComponentFixture<PharmacistprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PharmacistprofileComponent]
    });
    fixture = TestBed.createComponent(PharmacistprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
