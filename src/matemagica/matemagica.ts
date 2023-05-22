export class Matemagica {
  private _firstNumber: number;
  private _secondNumber: number;

  public setFirstNumber(firstNumber: number): void {
    this._firstNumber = firstNumber;
  }

  public setSecondNumber(secondNumber: number): void {
    this._secondNumber = secondNumber;
  }

  public getFirstNumber(): number {
    return this._firstNumber;
  }

  public getSecondNumber(): number {
    return this._secondNumber;
  }

  public getSum(): number {
    return this._firstNumber + this._secondNumber;
  }

  public getSubtraction(): number {
    return this._firstNumber - this._secondNumber;
  }

  public getMultiplication(): number {
    return this._firstNumber * this._secondNumber;
  }

  public getDivision(): number {
    return this._firstNumber / this._secondNumber;
  }
}
