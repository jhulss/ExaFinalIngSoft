describe("Sumador", () => {
  it("Cambia los valores y muestra el resultado correcto", () => {
    cy.visit("/");
    cy.get("#monto").type('0.1');
    cy.get("#efectivo").type('10');
    cy.get("#boton-calcular").click();
    cy.get("#resultado-div").should('have.text', '10');
  });
});