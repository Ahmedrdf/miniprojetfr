import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ArticleService } from '../article.service';
import { Article } from '../article';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']

})
export class ArticleListComponent implements OnInit {
  articles: Observable<Article[]>;

  constructor(private articleService: ArticleService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
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

