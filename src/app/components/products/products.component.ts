import { Component, OnInit } from '@angular/core';
import { ArticleService } from "../../services/article.service";
import { Article } from "../../models/article";
import { Global } from "../../services/global";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ArticleService]
})
export class ProductsComponent implements OnInit {

  public articles: Article[];
  public url: string;

  constructor(
    private _articleService: ArticleService
  ) { 
    this.url = Global.url;
   }

  ngOnInit() {
    this._articleService.getArticles().subscribe(

      Response => {
        if (Response.articles) {
          this.articles = Response.articles;
        }
      },
      error => {
        console.log(error);
      }
    )
  }

}
