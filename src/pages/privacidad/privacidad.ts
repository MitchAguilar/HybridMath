import { Component } from '@angular/core';
import {   NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PrivacidadPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-privacidad',
  templateUrl: 'privacidad.html',
})
export class PrivacidadPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrivacidadPage');
  }

}
