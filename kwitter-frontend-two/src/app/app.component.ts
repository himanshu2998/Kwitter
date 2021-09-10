import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kwitter';
  public logedIn: boolean;
  public username: any;

  constructor(
    private _router: Router,
    private _userService: UserService
  ) {}

  ngOnInit() {
    this.logedIn = this._userService.getIdentity();
    this.username = JSON.parse(localStorage.getItem('username'));
  }

  ngDoCheck() {
    this.logedIn = this._userService.getIdentity();
    this.username = JSON.parse(localStorage.getItem('username'));
  }

  logout() {
    localStorage.clear();
    this.logedIn = false;
    this._router.navigate(['/']);
  }
}