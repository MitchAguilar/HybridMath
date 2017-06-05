import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MatrixPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-matrix',
  templateUrl: 'matrix.html',
})
export class MatrixPage {

  separator: string = ',';
  vector: Array<number> = []

  _modelDimen: number = 3;    // Dimension de la matrix. 3 => 3x3
  set modelDimen(value) {
    this._modelDimen = value;
  }
  get modelDimen(): number {
    return parseInt((this._modelDimen || '').toString());
  }

  _display: string = ''

  get display() { return this._display }
  set display(value) {
    this._display = value;
    this.vectorToMatrix(this.displayToVector())
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatrixPage');
  }

  displayToVector(): Array<number> {
    this.vector = [];
    (this.display || '').split(this.separator).map(n => this.vector.push(parseFloat(n)));
    return this.vector;
  }

  // TODO: Reparar funcion. No esta creando correctamente la matrix desde el vector
  vectorToMatrix(vector: Array<number> = this.vector): number[][] {
    let matrix = [];
    let row = [];
    for (var i = 0; i < this.vector.length; i++) {
      var ele = this.vector[i];
      if (i + 1 % this.modelDimen !== 0) {
        row.push(ele);
        continue;
      }
      matrix.push(row);
      row = [];
    }
    console.log("Matrix", matrix);

    return matrix
  }
}
