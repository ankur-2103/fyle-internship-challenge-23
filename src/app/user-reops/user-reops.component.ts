import { Component, Input } from '@angular/core';
import { UserRepo } from '../utils/userRepo';
import { ApiService } from '../services/api.service';
import { UserInfo } from '../utils/userInfo';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-user-reops',
  templateUrl: './user-reops.component.html',
  styleUrls: ['./user-reops.component.scss']
})
  
export class UserReopsComponent {
  @Input({ required: true }) userInfo!: UserInfo;

  countPerPage:number = 10;
  currPage: number = 1;
  totalPages: number = 0;

  userRepo: UserRepo[] = [];

  constructor(
    private apiService: ApiService,
    public loader: LoaderService
  ) { }

  pages = Array(this.totalPages).map((x, i) => i + 1);
  
  getRepos(count:number, page:number) {
    if (this.userInfo!== null && this.userInfo.repos_url!== null) {
      this.apiService.getRepos(this.userInfo.repos_url, count, page).subscribe({
        next: (data:any) => {
          if (data !== null) {
            this.userRepo = []
            for (let repo in data) {
              let newRepo = {} as UserRepo;
              newRepo.description = data[repo].description;
              newRepo.name = data[repo].name;
              newRepo.topics = data[repo].topics;
              newRepo.html_url = data[repo].html_url;
              this.userRepo.push(newRepo);
            }
          }
        },
        error: (error) => {
          this.userRepo = []
        }
      })
    }
  }

  setCount(event:any) {
    this.countPerPage = parseInt(event.target.value);
    this.currPage = 1;
    this.totalPages = typeof (this.userInfo.public_repos) === "number" ? Math.ceil(this.userInfo.public_repos / this.countPerPage) : 0;
    this.pages = Array(this.totalPages).fill(0).map((x,i)=>i+1);
    this.getRepos(this.countPerPage, this.currPage)
  }
  
  setPage(value: number) {
    this.currPage = value
    this.getRepos(this.countPerPage, this.currPage)
  }
  
  next() {
    if (this.totalPages >= this.currPage + 1) {
      this.currPage = this.currPage + 1;
      this.getRepos(this.countPerPage, this.currPage)
    }
  }
  
  previous() {
    if (1 <= this.currPage - 1) {
      this.currPage = this.currPage - 1;
      this.getRepos(this.countPerPage, this.currPage)
    }
  }
  
  last() {
    this.currPage = this.totalPages
    this.getRepos(this.countPerPage, this.currPage)
  }
  
  first() {
    this.currPage = 1;
    this.getRepos(this.countPerPage, this.currPage)
  }

  ngOnChanges() {
    this.getRepos(this.countPerPage, this.currPage);
    this.totalPages = typeof (this.userInfo.public_repos) === "number" ? Math.ceil(this.userInfo.public_repos / this.countPerPage) : 0;
    this.pages = Array(this.totalPages).fill(0).map((x,i)=>i+1);
  }
}
