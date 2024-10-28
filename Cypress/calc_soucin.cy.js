describe("testy na soucin", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/calc/index.html");
  });
  it("pozitivni cisla", () => {
    cy.get("#prvni").type("10");
    cy.get("#druhy").type("10");
    cy.get("#select").select("soucin");
    cy.get("#odeslat").click();
    cy.get("#vysledek").should("have.text", "Výsledek: 100");
  });
  it("prvni cislo negativni", () => {
    cy.get("#prvni").type("-10");
    cy.get("#druhy").type("25");
    cy.get("#select").select("soucin");
    cy.get("#odeslat").click();
    cy.get("#vysledek").should("have.text", "Výsledek: -250");
  });
  it("druhe cislo negativni", () => {
    cy.get("#prvni").type("25");
    cy.get("#druhy").type("-15");
    cy.get("#select").select("soucin");
    cy.get("#odeslat").click();
    cy.get("#vysledek").should("have.text", "Výsledek: -375");
  });
  it("obe negativni", () => {
    cy.get("#prvni").type("-15");
    cy.get("#druhy").type("-17");
    cy.get("#select").select("soucin");
    cy.get("#odeslat").click();
    cy.get("#vysledek").should("have.text", "Výsledek: 255");
  });
});
