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

  // Model options
  resultRound: string = ''  // Muestra el resultado del redondeo
  modelRound: string = ''  // Modelo que almacena el valor de cambio del 'ion-range'
  //
  resultSimpli: string = '' // Muestra la ecuacion simplificada
  toggleSimpli: boolean = false
  //
  toggleDeri: boolean = false
  resultDeri: string = ''
  modelVariableDerivar: string = ''
  variables: Array<string> = []

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
      // Evalua la expression y muetra resultado
      this.result = this.mathjs.eval(this.display) as string;
    } catch (e) { }

    // Simplifica la expression
    if (this.toggleSimpli) {
      this.onChangeSimpli()
    }

    // Deriva la expression
    if (this.toggleDeri) {
      this.onChangeDeri();
    }

    this.setFocusDisplay()
    this.cleanModelsSegments()
  }

  listCharsBase: Array<{ value: string, show: string }> = [{ value: '(', show: '(' }, { value: ')', show: ')' }, { value: '+', show: '+' }, { value: '-', show: '-' }, { value: '/', show: '/' }, { value: '*', show: '*' }, { value: '^', show: '^' }, { value: 'x', show: 'x' }, { value: 'y', show: 'y' }]

  listCharsAlgebra: Array<{ value: string, show: string }> = [{ value: 'sin(', show: 'Sin' }, { value: 'atan(', show: 'Atan' }, { value: 'cos(', show: 'Cos' }, { value: 'tan(', show: 'Tan' }, { value: 'sqrt(', show: 'Sqrt' }, { value: 'log(', show: 'Log' }]

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
   * en '@var listCharsAlgebra' se procede a 
   * eliminar el elemento completo,p.ej: cos
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
        this.display.substring(0, this.display.length - 1) : ''
    }
  }

  /**
   * Obtiene todas las posibles variables 
   * contenidas en la expresion/display.
   */
  public getPosiblesVariables(): Array<string> {
    let matches = [];
    let variables = [];
    let re = /([a-z])/ig;

    while ((matches = re.exec(this.display)) !== null) {
      variables.push(matches[0])
    }
    return variables;
  }

  /**
   * Redondea el resultado de la expresion
   * @param event 
   */
  onChangeRound(event?: any) {
    this.resultRound = this.mathjs.round(this.result, parseFloat(this.modelRound)).toString();
  }

  /**
   * Simplifica la expresion
   * @param event 
   */
  onChangeSimpli(event?: any) {
    try {
      this.resultSimpli = this.mathjs.simplify(this.display) || '';
    } catch (error) { }
  }

  /**
   * Detecta cambios en el modelo de derivada.
   * Reconoce las variables escritas en la expresion
   * y las asigna a un vector @var variables .
   * @param event 
   */
  onChangeDeri(event?: any) {
    this.variables = [];
    (this.getPosiblesVariables() || []).map(varr => {
      if (this.variables.indexOf(varr) == -1) { // filtar repetidos
        this.variables.push(varr);
      }
    });
    this.derivar()
  }

  /**
   * Derivar la expresion
   */
  derivar() {
    try {
      this.resultDeri = this.mathjs.derivative(this.display, this.modelVariableDerivar) || '';
    } catch (error) {
      console.log("Error al derivar", error);
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
