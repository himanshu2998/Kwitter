import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
//import {User} from '../../models/user';
//import {Follow} from '../../models/follow';
import {UserService} from '../../services/user.service';
import { NotificationActions } from 'src/app/actionCreators';
//import {FollowService} from '../../services/follow.service';
//import {GLOBAL} from '../../services/global';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    //providers: [UserService, FollowService]
    providers: [UserService]
})
export class ProfileComponent implements OnInit {
    public title: string;
    public user = undefined;
    public status: string;
    public logedIn: boolean;
    //public token;
    //public stats;
    //public url: string;
    //public followed;
    //public following;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService,
        public _notificationAction: NotificationActions,
        //private _followService: FollowService
    ) {
        this.title = 'Profile';
        this.logedIn = this._userService.getIdentity();
        // this.token = this._userService.getToken();
        // this.url = GLOBAL.url;
        // this.followed = false;
        // this.following = false;
    }

    ngOnInit() {
        this.loadPage();
    }

    loadPage() {
      this.getUser();
        // this._route.params.subscribe(
        //     params => {
        //         let id = params['id'];
        //         this.getUser(id);
        //         // this.getCounter(id);
        //     }
        // );
    }

    getUser() {
        this._userService.getProfile().subscribe(
            response => {
                    this.user = response;
                    // if (response.following && response.following._id) {
                    //     this.following = true;
                    // } else {
                    //     this.following = false;
                    // }
                    // if (response.followed && response.followed._id) {
                    //     this.followed = true;
                    // } else {
                    //     this.followed = false;
                    // }
            },
            error => {
                this.status = 'error';
                this._notificationAction.notifyError({title:'', message: error.error?Object.values(error.error)[0]:""});
                this._router.navigate(['/home']);
            }
        );
    }

    public updateDescription() {
      this._userService.updateProfile(this.user).subscribe(
        response => {
                this.user = response;
                // if (response.following && response.following._id) {
                //     this.following = true;
                // } else {
                //     this.following = false;
                // }
                // if (response.followed && response.followed._id) {
                //     this.followed = true;
                // } else {
                //     this.followed = false;
                // }
        },
        error => {
            this._notificationAction.notifyError({title:'', message: error.error?Object.values(error.error)[0]:""});
        }
      );
  }

    // getCounter(id) {
    //     this._userService.getCounter(id).subscribe(
    //         response => {
    //             this.stats = response;
    //         },
    //         error => {
    //             console.log(<any>error);
    //         }
    //     );
    // }

    // followUser(followed) {
    //     var follow = new Follow('', this.identity._id, followed);
    //     this._followService.addFollow(this.token, follow).subscribe(
    //         response => {
    //             this.following = true;
    //         },
    //         error => {
    //             console.log(<any>error);
    //         }
    //     );
    // }

    // unfollowUser(followed) {
    //     this._followService.deleteFollow(this.token, followed).subscribe(
    //         response => {
    //             this.following = false;
    //         },
    //         error => {
    //             console.log(<any>error);
    //         }
    //     );
    // }
    
    // public followUserOver;

    // mouseEnter(user_id) {
    //     this.followUserOver = user_id;
    // }

    // mouseLeave(user_id) {
    //     this.followUserOver = 0;
    // }
}
