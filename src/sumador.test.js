import cambiar from "./sumador.js";

describe("cambiar", () => {
  it("deberia cambiar monedas simples en su unidad minima", () => {
    expect(cambiar(1)).toEqual(1);
  });

});