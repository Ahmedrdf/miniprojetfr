import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute  } from '@angular/router';
import { Observable } from 'rxjs';
import { ArticleService } from '../article.service';
import { Article} from '../article';

@Component({
  selector: 'app-usermenu',
  templateUrl: './usermenu.component.html',
  styleUrls: ['./usermenu.component.css']
})
export class UsermenuComponent implements OnInit {
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
    this.router.navigate(['check', id]);
  }
}

