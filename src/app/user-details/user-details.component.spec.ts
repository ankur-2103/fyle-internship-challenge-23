import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsComponent } from './user-details.component';
import { UserInfo } from '../utils/userInfo';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailsComponent]
    });
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    component.userInfo = {} as UserInfo
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should contain user info", () => {
    expect(component.userInfo).toEqual({} as UserInfo);
  })

});
