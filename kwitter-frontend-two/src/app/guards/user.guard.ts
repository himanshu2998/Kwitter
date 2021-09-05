import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(
    private _router: Router,
    private _userService: UserService
    ) {}

    canActivate() {
      let logedIn = this._userService.getIdentity();
      
      if (logedIn) {
          return true;
      } else {
          this._router.navigate(['/login']);
          return false;
      }
  }
}