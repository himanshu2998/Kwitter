import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {LoginUser} from '../../models/user';
import {UserService} from '../../services/user.service';
import { NotificationActions } from 'src/app/actionCreators';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    providers: [UserService]
})
export class LoginComponent implements OnInit {
    public title: string;
    public loginUser: LoginUser;
    public status: string;
    public logedIn: boolean;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService,
        public _notificationAction: NotificationActions
    ) {
        this.title = 'Login';
        this.loginUser = new LoginUser();
        this.logedIn = _userService.getIdentity();
    }

    ngOnInit() {
      this.logedIn = this._userService.getIdentity();
    }

    onSubmit() {
        this._userService.signin(this.loginUser).subscribe(
            response => {
                let token = response.access;
                if (!token) {
                    this.status = 'error';
                } else {
                    this.status = 'success';
                    localStorage.setItem('token', JSON.stringify(token));
                    localStorage.setItem('username', JSON.stringify(this.loginUser.username));
                    this._router.navigate(['/home']);
                }
            },
            error => {
              this.status = 'error';
              localStorage.clear();
              this._notificationAction.notifyError({title:'', message: error.error?Object.keys(error.error)[0].concat(": ".concat(error.error[Object.keys(error.error)[0]])):""});
            }
        );
    }
}
