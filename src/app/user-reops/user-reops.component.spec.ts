import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserReopsComponent } from './user-reops.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from '../services/api.service';
import { UserInfo } from '../utils/userInfo';

describe('UserReopsComponent', () => {
  let component: UserReopsComponent;
  let fixture: ComponentFixture<UserReopsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserReopsComponent,
      ],
      imports: [HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(UserReopsComponent);
    component = fixture.componentInstance;
    component.userInfo = {} as UserInfo
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have empty user repo array', () => {
    expect(component.userRepo).toEqual([]);
  });

  it('should content default count per page equal to 10', () => {
    expect(component.countPerPage).toEqual(10);
  })

  it('should contain user info', () => {
    expect(component.userInfo).toEqual({} as UserInfo);
  })
});
