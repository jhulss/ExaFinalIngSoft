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

  it('Fracciona correctamente el monto de dinero', () => {
    expect(fraccionarMonto(19)).toEqual([5, 5, 5, 2, 2]);
    expect(fraccionarMonto(10)).toEqual([5, 5]);
    expect(fraccionarMonto(3)).toEqual([2, 1]);
    expect(fraccionarMonto(1)).toEqual([1]);
  });

});

