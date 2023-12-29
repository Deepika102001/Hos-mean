import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmamedicineComponent } from './pharmamedicine.component';

describe('PharmamedicineComponent', () => {
  let component: PharmamedicineComponent;
  let fixture: ComponentFixture<PharmamedicineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PharmamedicineComponent]
    });
    fixture = TestBed.createComponent(PharmamedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
