import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard, AuthService } from './shared';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';

import { AngularFireAuth } from 'angularfire2/auth';

import { NgxPermissionsModule } from 'ngx-permissions';
import { HttpClientModule } from '@angular/common/http';


export const firebaseConfig = {
    apiKey: 'AIzaSyCLWlp7tAhy0b5_nIVwCMpI9azjsga1UPQ',
    authDomain: 'iberialab-b4032.firebaseapp.com',
    databaseURL: 'https://iberialab-b4032.firebaseio.com',
    projectId: 'iberialab-b4032',
    storageBucket: 'iberialab-b4032.appspot.com',
    messagingSenderId: '726145455716'
};


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
    // for development
    // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-4/master/dist/assets/i18n/', '.json');
    return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        AngularFirestoreModule,
        AngularFireModule.initializeApp(firebaseConfig),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        }),
        NgxPermissionsModule.forRoot(),
        HttpClientModule
    ],
    providers: [AuthGuard, AngularFireAuth, AngularFireDatabase, AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
