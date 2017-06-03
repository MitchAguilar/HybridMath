import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MathJsProvider } from "../../providers/math-js/math-js";

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

  // Models segment
  modelNums: string = ''
  modelBase: string = ''
  modelAlg: string = ''

  @ViewChild('inputdisplay') InputDisplay;

  result: string = ''
  _display: string = '';

  get display() {
    return this._display
  }
  set display(value) {
    this._display = value;

    try {
      this.result = this.mathjs.eval(this.display) as string;
    } catch (e) { }

    this.setFocusDisplay()
    this.cleanModelsSegments()
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

  listCharsNum: Array<{ value: string, show: string }> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public mathjs: MathJsProvider) {

    // Llena el vector de numeros.
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => this.listCharsNum.push({ value: n.toString(), show: n.toString() }))
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalcPage');
  }

  /**
   * Añade un(os) caracter(es) al display
   * @param char Caracter(es) a mostrar en display
   */
  addCharDisplay(char: string) {
    this.display = this.display.concat(char);
  }

  /**
   * Quita el ultimo caracter en el display.
   * En caso de que el contenido del display 
   * termine en algun caracter referenciado
   * en 'listCharsAlgebra'.
   */
  quitLast(): void {
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

  /**
   * Limplia la pantalla/display
   */
  cleanDisplay() {
    this.display = '';
  }

  /**
   * Limpia los modelos de los segmentos
   */
  cleanModelsSegments() {
      this.modelAlg = ''
      this.modelBase = ''
      this.modelNums = ''
  }

  /**
   * Establece el foco en el panel display
   */
  setFocusDisplay() {
    this.InputDisplay.setFocus();
  }
}
