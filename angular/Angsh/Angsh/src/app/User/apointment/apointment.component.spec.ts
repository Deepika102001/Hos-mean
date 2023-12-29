import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApointmentComponent } from './apointment.component';

describe('ApointmentComponent', () => {
  let component: ApointmentComponent;
  let fixture: ComponentFixture<ApointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApointmentComponent]
    });
    fixture = TestBed.createComponent(ApointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
