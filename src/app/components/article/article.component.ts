import { Component, OnInit } from '@angular/core';
import { ArticleService } from "../../services/article.service";
import { Article } from "../../models/article";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Global } from "../../services/global";
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {
  currentUser: User;
  public article: Article;
  public url: string;
  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.url = Global.url;
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
   }

  ngOnInit() {
    this._route.params.subscribe(params =>{
      let id = params['id'];

      this._articleService.getArticle(id).subscribe(
        Response =>{
          if (Response.article) {
            this.article = Response.article;
          }else{
            this._router.navigate(['/home']);
          }
        },
        error =>{
          console.log(error);
          this._router.navigate(['/home']);
        }
      );
    });
  }

  delete(id){

    
    (willDelete) => {
      if (willDelete) {
        this._articleService.delete(id).subscribe(
          Response =>{         
            this._router.navigate(['/home']);
          },
          error =>{
            console.log(error);
            this._router.navigate(['/home']);
          }
        );
    };  
  }
 }
}
