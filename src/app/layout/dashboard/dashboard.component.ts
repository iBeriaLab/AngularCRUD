import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


import { TranslateService } from '@ngx-translate/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {



    p = 1;

    usersRef: AngularFireList<any>;
    users: Observable<any[]>;

    countriesRef: AngularFireList<any>;
    countries: Observable<any[]>;

    postsRef: AngularFireList<any>;
    posts: Observable<any[]>;


    constructor(db: AngularFireDatabase, private translate: TranslateService) {

        translate.setDefaultLang('ka');

        this.countriesRef = db.list('countries');
        // Use snapshotChanges().map() to store the key
        this.countries = this.countriesRef.snapshotChanges().map(changes => {
            return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        });

        this.usersRef = db.list('users');
        // Use snapshotChanges().map() to store the key
        this.users = this.usersRef.snapshotChanges().map(changes => {
            return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        });

        this.postsRef = db.list('posts');
        // Use snapshotChanges().map() to store the key
        this.posts = this.postsRef.snapshotChanges().map(changes => {
            return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        });
    }

    ngOnInit() {
    }
}
