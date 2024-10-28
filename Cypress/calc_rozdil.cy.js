describe("testy na rozdil", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/calc/index.html");
  });
  it("pozitivni cisla", () => {
    cy.get("#prvni").type("10");
    cy.get("#druhy").type("10");
    cy.get("#select").select("rozdil");
    cy.get("#odeslat").click();
    cy.get("#vysledek").should("have.text", "Výsledek: 0");
  });
  it("prvni cislo negativni", () => {
    cy.get("#prvni").type("-10");
    cy.get("#druhy").type("25");
    cy.get("#select").select("rozdil");
    cy.get("#odeslat").click();
    cy.get("#vysledek").should("have.text", "Výsledek: -35");
  });
  it("druhe cislo negativni", () => {
    cy.get("#prvni").type("25");
    cy.get("#druhy").type("-15");
    cy.get("#select").select("rozdil");
    cy.get("#odeslat").click();
    cy.get("#vysledek").should("have.text", "Výsledek: 40");
  });
  it("obe negativni", () => {
    cy.get("#prvni").type("-15");
    cy.get("#druhy").type("-17");
    cy.get("#select").select("rozdil");
    cy.get("#odeslat").click();
    cy.get("#vysledek").should("have.text", "Výsledek: 2");
  });
});
