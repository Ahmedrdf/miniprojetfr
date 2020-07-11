import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ArticleService } from '../article.service';
import { Article } from '../article';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {

  id: number;
  articles: Article ;

  constructor(private route: ActivatedRoute,private router: Router,
    private articleService: ArticleService) { }

  ngOnInit() {
    this.articles= new  Article();

    this.id = this.route.snapshot.params['id'];
    
    this.articleService.getarticle(this.id)
      .subscribe(data => {
        console.log(data)
        this.articles= data;
      }, error => console.log(error));
  }

  updatearticle() {
    this.articleService.ajouterpanier(this.id, this.articles)
      .subscribe(data => console.log(data), error => console.log(error));
    this.articles= new Article();
    this.gotoList();
  }

  onSubmit() {
    this.updatearticle();    
  }

  gotoList() {
    this.router.navigate(['/menupanier']);
  }}