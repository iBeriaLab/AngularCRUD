import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    pushRightClass = 'push-right';

    name: any;
    state: string;

    constructor(public af: AngularFireAuth, private translate: TranslateService, public router: Router) {
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
                this.toggleSidebar();
            }
        });

        this.af.authState.subscribe(auth => {
            if (auth) {
                this.name = auth;
            }
        });
    }

    ngOnInit() {}

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }

    logout() {
        this.af.auth.signOut();
        this.router.navigateByUrl('/');
    }
}
