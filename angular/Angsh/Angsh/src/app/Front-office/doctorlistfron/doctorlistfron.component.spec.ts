import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorlistfronComponent } from './doctorlistfron.component';

describe('DoctorlistfronComponent', () => {
  let component: DoctorlistfronComponent;
  let fixture: ComponentFixture<DoctorlistfronComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorlistfronComponent]
    });
    fixture = TestBed.createComponent(DoctorlistfronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
