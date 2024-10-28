describe("testy na podil", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/calc/index.html");
  });
  it("pozitivni cisla", () => {
    cy.get("#prvni").type("10");
    cy.get("#druhy").type("10");
    cy.get("#select").select("podil");
    cy.get("#odeslat").click();
    cy.get("#vysledek").should("have.text", "Výsledek: 1");
  });
  it("prvni cislo negativni", () => {
    cy.get("#prvni").type("-10");
    cy.get("#druhy").type("25");
    cy.get("#select").select("podil");
    cy.get("#odeslat").click();
    cy.get("#vysledek").should("have.text", "Výsledek: -0.4");
  });
  it("druhe cislo negativni", () => {
    cy.get("#prvni").type("30");
    cy.get("#druhy").type("-15");
    cy.get("#select").select("podil");
    cy.get("#odeslat").click();
    cy.get("#vysledek").should("have.text", "Výsledek: -2");
  });
  it("obe negativni", () => {
    cy.get("#prvni").type("-34");
    cy.get("#druhy").type("-17");
    cy.get("#select").select("podil");
    cy.get("#odeslat").click();
    cy.get("#vysledek").should("have.text", "Výsledek: 2");
  });
  it("deleni nulou", () => {
    cy.get("#prvni").type("5");
    cy.get("#druhy").type("0");
    cy.get("#select").select("podil");
    cy.get("#odeslat").click();
    cy.get("#vysledek").should("have.text", "Výsledek: Nemůžeš dělit nulou");
  });
});
