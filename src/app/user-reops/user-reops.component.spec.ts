import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserReopsComponent } from './user-reops.component';
import { PaginationComponent } from '../pagination/pagination.component';

describe('UserReopsComponent', () => {
  let component: UserReopsComponent;
  let fixture: ComponentFixture<UserReopsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserReopsComponent,
        PaginationComponent
      ]
    });
    fixture = TestBed.createComponent(UserReopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
