import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ApiService } from './api.service';

import { MyApp } from './app.component';

import { NetflixPage } from '../pages/netflix/netflix';
import { CatPage } from '../pages/cat/cat';
import { QuotePage } from '../pages/quote/quote';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    NetflixPage,
    CatPage,
    QuotePage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NetflixPage,
    CatPage,
    QuotePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ApiService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
