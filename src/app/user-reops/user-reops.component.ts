import { Component, Input } from '@angular/core';
import { UserRepo } from '../utils/userRepo';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-user-reops',
  templateUrl: './user-reops.component.html',
  styleUrls: ['./user-reops.component.scss']
})
  
export class UserReopsComponent {
  @Input({ required: true }) userRepoUrl!: string | null | undefined;
  @Input({ required: true }) userRepoCount!: number | null | undefined;

  countPerPage:number = 10;
  currPage: number = 1;
  totalPages: number = typeof(this.userRepoCount)==="number" ? Math.ceil(this.userRepoCount / this.countPerPage) : 0;

  userRepo: UserRepo[] = [];

  constructor(
    private apiService: ApiService
  ) { }

  pages = Array(this.totalPages).map((x, i) => i + 1);
  
  getRepos() {
    if (this.userRepoUrl) {
      this.apiService.getRepos(this.userRepoUrl, this.countPerPage, this.currPage).subscribe({
        next: (data:any) => {
          if (data !== null) {
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

  setTotalPages(value:string) {
    this.totalPages = parseInt(value);
  }

  setPage(value: number) {
    this.currPage = value
  }

  next() {
    if (this.totalPages >= this.currPage + 1) {
      this.currPage = this.currPage + 1;
    }
  }

  previous() {
    if (1 <= this.currPage - 1) {
      this.currPage = this.currPage - 1;
    }
  }

  last() {
    this.currPage = this.totalPages
  }

  first() {
    this.currPage = 1;
  }

  ngOnChanges() {
    this.getRepos();
    console.log("asas")
  }

  ngOnInit() {
    this.getRepos();
    this.totalPages = typeof (this.userRepoCount) === "number" ? Math.ceil(this.userRepoCount / this.countPerPage) : 0;
    this.pages = Array(this.totalPages).fill(0).map((x,i)=>i+1);
  }
}
