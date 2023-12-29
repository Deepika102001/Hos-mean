import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermedicineComponent } from './usermedicine.component';

describe('UsermedicineComponent', () => {
  let component: UsermedicineComponent;
  let fixture: ComponentFixture<UsermedicineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsermedicineComponent]
    });
    fixture = TestBed.createComponent(UsermedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
