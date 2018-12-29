
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AngularFireModule } from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { IonicStorageModule } from '@ionic/storage'; // local storage

import { ApiProvider } from '../providers/api/api'; // only for web api
import { HttpClientModule } from '@angular/common/http'; //only for web api
import { NotifyPage } from '../pages/notify/notify';

var config = {
  apiKey: "AIzaSyCG8IJuTkVv7bi3vs2RGjZeyvb2zhBKnC4",
  authDomain: "homemart-29be0.firebaseapp.com",
  databaseURL: "https://homemart-29be0.firebaseio.com",
  projectId: "homemart-29be0",
  storageBucket: "",
  messagingSenderId: "594685130615"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NotifyPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule,
    AngularFireModule.initializeApp(config),
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NotifyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider
  ]
})
export class AppModule {}
