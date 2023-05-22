import { describe, expect, test } from "@jest/globals";
import { Matemagica } from "../matemagica/matemagica";

describe("Matemagica", () => {
  const firstNumber = 10;
  const secondNumber = 5;

  test("somar dois numeros", () => {
    const result = new Matemagica();
    result.setFirstNumber(firstNumber);
    result.setSecondNumber(secondNumber);
    expect(result.getSum()).toBe(15);
  });

  test("subtrair dois numeros", () => {
    const result = new Matemagica();
    result.setFirstNumber(firstNumber);
    result.setSecondNumber(secondNumber);
    expect(result.getSubtraction()).toBe(5);
  });

  test("multiplicar dois numeros", () => {
    const result = new Matemagica();
    result.setFirstNumber(firstNumber);
    result.setSecondNumber(secondNumber);
    expect(result.getMultiplication()).toBe(50);
  });

  test("dividir dois numeros", () => {
    const result = new Matemagica();
    result.setFirstNumber(firstNumber);
    result.setSecondNumber(secondNumber);
    expect(result.getDivision()).toBe(2);
  });
});
