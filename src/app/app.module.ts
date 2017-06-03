import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AlgebraPage } from "../pages/algebra/algebra";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CalcPage } from "../pages/calc/calc";
import { CharactersPage } from "../pages/characters/characters";
import { MathJsProvider } from '../providers/math-js/math-js';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AlgebraPage,
    CalcPage,
    CharactersPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AlgebraPage,
    CalcPage,
    CharactersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MathJsProvider
  ]
})
export class AppModule { }
