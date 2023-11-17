import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { UserInfo } from '../utils/userInfo';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
  
export class UserDetailsComponent {
  @Input({ required: true }) userInfo!: UserInfo;
  public val: boolean = true;
  
  constructor(
    public loader: LoaderService
  ) { }
}
