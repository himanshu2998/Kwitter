import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [UserService]
})
export class HomeComponent implements OnInit {
    public title: string;
    public logedIn = false;

    constructor(
        private _userService: UserService
    ) {
        this.title = 'Welcome';
    }

    ngOnInit() {
        this.logedIn = this._userService.getIdentity();
    }

    onSubmit() {
    }
}
