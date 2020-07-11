import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-creat',
  templateUrl: './article-creat.component.html',
  styleUrls: ['./article-creat.component.css']
})
export class ArticleCreatComponent implements OnInit {

  articles: Article = new Article();
  submitted = false;

  constructor(private articleservice:ArticleService,
    private router: Router) { }

  ngOnInit() {
  }

  newSpectateur(): void {
    this.submitted = false;
    this.articles= new Article();
  }

  save() {
    this.articleservice.createarticle(this.articles)
      .subscribe(data => console.log(data), error => console.log(error));
    this.articles = new Article();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/articles']);
  }
}

