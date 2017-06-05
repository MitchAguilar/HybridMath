import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { AlgebraPage } from "../pages/algebra/algebra";
import { AboutPage } from "../pages/about/about";
import { CalcPage } from "../pages/calc/calc";
import { CharactersPage } from "../pages/characters/characters";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MathJsProvider } from '../providers/math-js/math-js';
import { MatrixPage } from "../pages/matrix/matrix";
import { SoportePage } from "../pages/soporte/soporte";
import { SugerenciaPage } from "../pages/sugerencia/sugerencia";
import { PreguntasPage } from "../pages/preguntas/preguntas";
import { PrivacidadPage } from "../pages/privacidad/privacidad";

@NgModule({
  declarations: [
    MyApp,
    AlgebraPage,
    CalcPage,
    CharactersPage,
    AboutPage,
    MatrixPage,
    SoportePage,
    SugerenciaPage,
    PreguntasPage,
    PrivacidadPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AlgebraPage,
    CalcPage,
    CharactersPage,
    AboutPage,
    MatrixPage,
    SoportePage,
    SugerenciaPage,
    PreguntasPage,
    PrivacidadPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MathJsProvider
  ]
})
export class AppModule { }
