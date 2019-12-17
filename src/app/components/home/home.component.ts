import { Component, OnInit } from '@angular/core';
import { ArticleService } from "../../services/article.service";
import { Article } from "../../models/article";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]
})
export class HomeComponent implements OnInit {

 public title: string;
 public articles: Article[];
  constructor(
    private _articleService: ArticleService
  ) {
    this.title = "Ultimos Productos";
   }

  ngOnInit() {

    this._articleService.getArticles(true).subscribe(

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
