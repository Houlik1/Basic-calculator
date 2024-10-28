describe("testy na soucet", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/calc/index.html");
  });
  it("pozitivni soucet", () => {
    cy.get("#prvni").type("10");
    cy.get("#druhy").type("10");
    cy.get("#odeslat").click();
    cy.get("#vysledek").should("have.text", "Výsledek: 20");
  });
  it("prvni cislo negativni", () => {
    cy.get("#prvni").type("-10");
    cy.get("#druhy").type("25");
    cy.get("#odeslat").click();
    cy.get("#vysledek").should("have.text", "Výsledek: 15");
  });
  it("druhe cislo negativni", () => {
    cy.get("#prvni").type("25");
    cy.get("#druhy").type("-15");
    cy.get("#odeslat").click();
    cy.get("#vysledek").should("have.text", "Výsledek: 10");
  });
  it("obe negativni", () => {
    cy.get("#prvni").type("-15");
    cy.get("#druhy").type("-17");
    cy.get("#odeslat").click();
    cy.get("#vysledek").should("have.text", "Výsledek: -32");
  });
  it("nevyplneny prvni input", () => {
    cy.get("#druhy").type("25");
    cy.get("#odeslat").click();
    cy.get("#vysledek").should(
      "have.text",
      "Výsledek: nezapomen vyplnit kolonky"
    );
  });
  it("nevyplneny druhy input", () => {
    cy.get("#prvni").type("25");
    cy.get("#odeslat").click();
    cy.get("#vysledek").should(
      "have.text",
      "Výsledek: nezapomen vyplnit kolonky"
    );
  });
  it("nevyplneny zadny input", () => {
    cy.get("#odeslat").click();
    cy.get("#vysledek").should(
      "have.text",
      "Výsledek: nezapomen vyplnit kolonky"
    );
  });
});
