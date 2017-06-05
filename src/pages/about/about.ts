import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SoportePage } from "../soporte/soporte";
import { SugerenciaPage } from "../sugerencia/sugerencia";
import { PreguntasPage } from "../preguntas/preguntas";
import { PrivacidadPage } from "../privacidad/privacidad";

/**
 * Generated class for the AboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  pages: Array<{ title: string, component: any }>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages = [
      { title: 'Contactar con soporte', component: SoportePage },
      { title: 'Sugerir una caracteristica', component: SugerenciaPage },
      { title: 'Preguntas frecuentes', component: PreguntasPage },
      { title: 'Privacidad', component: PrivacidadPage }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(page.component);
  }

}
