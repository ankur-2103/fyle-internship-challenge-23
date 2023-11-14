import { Component, Input } from '@angular/core';
import { UserInfo } from '../utils/userInfo';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
  
export class UserDetailsComponent {
  @Input({required:true}) userInfo!: UserInfo;
}
