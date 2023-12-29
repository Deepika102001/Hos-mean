import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontofficeprofileComponent } from './frontofficeprofile.component';

describe('FrontofficeprofileComponent', () => {
  let component: FrontofficeprofileComponent;
  let fixture: ComponentFixture<FrontofficeprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrontofficeprofileComponent]
    });
    fixture = TestBed.createComponent(FrontofficeprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
