import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import { NotificationActions } from 'src/app/actionCreators';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    providers: [UserService]
})
export class RegisterComponent implements OnInit {
    public title: string;
    public user: User;
    public registered: boolean;

    constructor(
        private _router: Router,
        private _userService: UserService,
        public _notificationAction: NotificationActions
    ) {
        this.title = 'Register';
        this.user = new User();
    }

    ngOnInit() {
      if (this._userService.getIdentity()){
        this._router.navigate(['/home']);
      }
    }

    onSubmit(form) {
        this._userService.register(this.user).subscribe(
            response => {
              this.registered = true;
              form.reset();
              //this._router.navigate(['/login']);
            },
            error => {
              this.registered = false;
              this._notificationAction.notifyError({title:'', message: error.error?Object.keys(error.error)[0].concat(": ".concat(error.error[Object.keys(error.error)[0]])):""});
            }
        );
    }
}
