import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCreatComponent } from './article-creat.component';

describe('ArticleCreatComponent', () => {
  let component: ArticleCreatComponent;
  let fixture: ComponentFixture<ArticleCreatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleCreatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
