import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { AuthService } from '../shared/services/auth.service'

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import 'rxjs/add/observable/fromPromise';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    constructor(public auth: AuthService, private router: Router, public afd: AngularFireDatabase) {

    }

    ngOnInit() {

    }
    signInWithGithub(): void {
        this.auth.githubLogin()
            .then(() => this.router.navigateByUrl['/app/dashboard']);
    }
    signInWithFacebook(): void {
        this.auth.facebookLogin()
            .then(() => this.router.navigateByUrl['/app/dashboard']);
    }
    signInWithGoogle(): void {
        this.auth.googleLogin()
            .then(() => this.router.navigateByUrl['/app/dashboard']);
    }
    signInWithTwitter(): void {
        this.auth.twitterLogin()
            .then(() => this.router.navigateByUrl['/app/dashboard']);
    }
}
