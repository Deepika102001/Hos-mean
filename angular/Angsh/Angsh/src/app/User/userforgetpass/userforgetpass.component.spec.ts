import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserforgetpassComponent } from './userforgetpass.component';

describe('UserforgetpassComponent', () => {
  let component: UserforgetpassComponent;
  let fixture: ComponentFixture<UserforgetpassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserforgetpassComponent]
    });
    fixture = TestBed.createComponent(UserforgetpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
