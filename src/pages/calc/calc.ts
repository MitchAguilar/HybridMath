import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CalcPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-calc',
  templateUrl: 'calc.html',
})
export class CalcPage {
  _display: string = '';

  get display() {
    return this._display
  }
  set display(value) {
    console.log("=>", value);

    this._display = value;
  }

  listCharsBase: Array<{ value: string, show: string }> = [{
    value: '(',
    show: '('
  }, {
    value: ')',
    show: ')'
  }, {
    value: '+',
    show: '+'
  }, {
    value: '-',
    show: '-'
  }, {
    value: '/',
    show: '/'
  }, {
    value: '*',
    show: '*'
  }, {
    value: '^',
    show: '^'
  }, {
    value: '{',
    show: '{'
  }, {
    value: '}',
    show: '}'
  }]

  listCharsAlgebra: Array<{ value: string, show: string }> = [{
    value: 'sin(',
    show: 'Sin'
  }, {
    value: 'atan(',
    show: 'Atan'
  }, {
    value: 'cos(',
    show: 'Cos'
  }, {
    value: 'tan(',
    show: 'Tan'
  }, {
    value: 'sqrt(',
    show: 'Sqrt'
  }, {
    value: 'log(',
    show: 'Log'
  }]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalcPage');
  }

  addCharDisplay(char: string) {
    this.display = this.display.concat(char);
  }

  quitLast() {
    let changed = false

    this.listCharsAlgebra.map(it => {
      if (this.display.endsWith(it.show.toLowerCase())) {
        this.display = this.display.substring(0, this.display.length - it.show.length)
        changed = true
      }
    })

    if (!changed) {
      this.display = this.display.length > 0 ?
        this.display.substring(0, this.display.length - 1)
        : ''
    }
  }

  cleanDisplay() {
    this.display = '';
  }

}
