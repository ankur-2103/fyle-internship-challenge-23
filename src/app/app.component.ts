import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { FormControl } from '@angular/forms';
import { UserInfo } from './utils/userInfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
  
export class AppComponent implements OnInit{
  userName = new FormControl<string>("johnpapa");
  userInfo: UserInfo | null = null;
  loading: boolean = false;

  constructor(
    private apiService: ApiService
  ) {}

  onSubmit() {
    if (this.userName.value !== null) {
      this.apiService.getUser(this.userName.value).subscribe({
        next: (data: any) => {
          this.userInfo = {} as UserInfo;
          this.userInfo.avatar_url = data.avatar_url && data.avatar_url
          this.userInfo.bio = data.bio && data.bio
          this.userInfo.location = data.location && data.location
          this.userInfo.twitter_username = data.twitter_username && data.twitter_username
          this.userInfo.html_url = data.html_url && data.html_url
          this.userInfo.repos_url = data.repos_url && data.repos_url
          this.userInfo.name = data.name && data.name
          this.userInfo.public_repos = data.public_repos && data.public_repos
        },
        error: (error) => {
          // console.log(error)
          this.userInfo = null;
        }
      });
    }
  }
  
  ngOnInit() {
    this.onSubmit()
  }
}