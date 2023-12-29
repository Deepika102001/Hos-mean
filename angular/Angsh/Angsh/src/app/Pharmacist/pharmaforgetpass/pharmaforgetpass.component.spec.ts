import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaforgetpassComponent } from './pharmaforgetpass.component';

describe('PharmaforgetpassComponent', () => {
  let component: PharmaforgetpassComponent;
  let fixture: ComponentFixture<PharmaforgetpassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PharmaforgetpassComponent]
    });
    fixture = TestBed.createComponent(PharmaforgetpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
