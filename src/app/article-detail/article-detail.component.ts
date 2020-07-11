import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ArticleService } from '../article.service';
import { Article } from '../article';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  id: number;
articles : Article;

  constructor(private route: ActivatedRoute,private router: Router,
    private articleService:ArticleService) { }

  ngOnInit() {
    this.articles= new Article();

    this.id = this.route.snapshot.params['id'];
    
    this.articleService.getarticle(this.id)
      .subscribe(data => {
        console.log(data)
        this.articles = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['listearticle']);
  }
}