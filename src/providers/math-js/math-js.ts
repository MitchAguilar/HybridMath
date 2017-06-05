import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import * as M from "mathjs";

/*
  Generated class for the MathJsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MathJsProvider {

  constructor() {
    console.log('Hello MathJsProvider Provider');
  }

  public eval(expression: string): string | number {
    return M.eval(expression);
  }

  public round(num: number | string, round: number | string): string | number {
    return M.round(num, round);
  }

  public simplify(expression: string) {
    return M.simplify(expression);
  }

  public derivative(expression: string, toDerivate: string) {
    return M.derivative(expression, toDerivate);
  }

}
