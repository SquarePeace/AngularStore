import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  currentUser: User;
  public searchString: string;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private authenticationService: AuthenticationService
  ) { 
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
   }

  ngOnInit() {
  }


  goSearch(){

    this._router.navigate(['/buscar', this.searchString]);
  }
}
