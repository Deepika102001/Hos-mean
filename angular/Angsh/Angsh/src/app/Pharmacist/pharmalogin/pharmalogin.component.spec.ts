import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaloginComponent } from './pharmalogin.component';

describe('PharmaloginComponent', () => {
  let component: PharmaloginComponent;
  let fixture: ComponentFixture<PharmaloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PharmaloginComponent]
    });
    fixture = TestBed.createComponent(PharmaloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
