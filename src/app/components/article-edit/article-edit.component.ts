import { Component, OnInit } from '@angular/core';
import { ArticleService } from "../../services/article.service";
import { Article } from "../../models/article";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Global } from "../../services/global";
import swal from "sweetalert";

@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {
  
  public article: Article;
  public status: string;
  public is_edit: boolean;
  public page_title: string;
  public url: string;

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg, .png, .gif, .jpeg",
    maxSize: "50",
    uploadAPI:  {
      url: Global.url+'upload-image'
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube tu imagen Aqui',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !'
    }
    };

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService
  ) {
    this.article = new Article('','','',null, null);
    this.is_edit = true;
    this.page_title = 'Editar articulo';
    this.url = Global.url;
   }

  ngOnInit() {
    this.getArticle();
  }

  onSubmit(){
    this._articleService.update(this.article._id, this.article).subscribe(
      Response =>{

        if (Response.status == 'success') {
          
          this.status = 'success';
          this.article = Response.article;
          //console.log(Response);
          swal(
            'Articulo Editado',
            'El articulo se ha Editado correctamente!!!',
            'success'
          );

          this._router.navigate(['/productos/articulo', this.article._id]);
        }else{
          this.status = 'error';
        }
      },
      error =>{
        console.log(error);
        this.status = 'ERROR';
      }
    )
}

imageUpload(data){
  let image_data = JSON.parse(data.response);
  this.article.image = image_data.image;
}

  getArticle(){

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

}
