import cambiar from "./sumador.js";

describe("cambiar", () => {
  it("deberia cambiar monedas simples en su unidad minima", () => {
    expect(cambiar(1)).toEqual(1);
  });

  it("no cambia monedas por otras monedas", () => {
    expect(cambiar(5)).toEqual(5);
  });

  it("cuando recibe cortes distintos, los cambia por monedas de 1 Bs", () => {
    expect(cambiar(6)).toEqual("1,1,1,1,1,1");
  });
  
});