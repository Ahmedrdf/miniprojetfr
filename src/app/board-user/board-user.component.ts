import { UserService } from '../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ArticleService } from '../article.service';
import { Article } from '../article';
@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {
  content = '';
  articles: Observable<Article[]>;
  constructor(private userService: UserService,private articleService: ArticleService,
    private router: Router) { }

  ngOnInit() {
    this.userService.getUserBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
  reloadData() {
    this.articles= this.articleService.getarticleList();
  }

  deletearticle(id: number) {
    this.articleService.deletearticle(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  articleDetails(id: number){
    this.router.navigate(['detailarticle', id]);
  }

  update(id: number){
    this.router.navigate(['updatearticle', id]);
  }
}


