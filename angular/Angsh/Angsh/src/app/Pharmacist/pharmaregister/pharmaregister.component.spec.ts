import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaregisterComponent } from './pharmaregister.component';

describe('PharmaregisterComponent', () => {
  let component: PharmaregisterComponent;
  let fixture: ComponentFixture<PharmaregisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PharmaregisterComponent]
    });
    fixture = TestBed.createComponent(PharmaregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
