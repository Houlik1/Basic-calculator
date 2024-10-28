// import selenium
const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");
//spusteni je pres prikaz npx mocha nazev_souboru

describe("testy na soucet", function () {
  let driver;
  let first;
  let second;
  let odeslat;
  let vysledek;
  before(async function () {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://127.0.0.1:5500/calc/index.html");
    first = await driver.findElement(By.id("prvni"));
    second = await driver.findElement(By.id("druhy"));
    odeslat = await driver.findElement(By.id("odeslat"));
    vysledek = await driver.findElement(By.id("vysledek"));
  });
  after(async function () {
    await driver.quit();
  });

  it("pozitivni soucet", async function () {
    await first.sendKeys("25");
    await second.sendKeys("25");
    odeslat.click();

    const textVysledku = await vysledek.getText();

    assert.strictEqual(textVysledku, "Výsledek: 50");
  });
  it("prvni cislo negativni", async function () {
    await first.sendKeys("-25");
    await second.sendKeys("35");
    odeslat.click();

    const textVysledku = await vysledek.getText();

    assert.strictEqual(textVysledku, "Výsledek: 10");
  });
  it("druhe cislo negativni", async function () {
    await first.sendKeys("25");
    await second.sendKeys("-35");
    odeslat.click();

    const textVysledku = await vysledek.getText();

    assert.strictEqual(textVysledku, "Výsledek: -10");
  });
  it("obe negativni", async function () {
    await first.sendKeys("-25");
    await second.sendKeys("-35");
    odeslat.click();

    const textVysledku = await vysledek.getText();

    assert.strictEqual(textVysledku, "Výsledek: -60");
  });
  it("nevyplneny prvni input", async function () {
    await second.sendKeys("-35");
    odeslat.click();

    const textVysledku = await vysledek.getText();

    assert.strictEqual(textVysledku, "Výsledek: nezapomen vyplnit kolonky");
  });
  it("nevyplneny druhy input", async function () {
    await first.sendKeys("-35");
    odeslat.click();

    const textVysledku = await vysledek.getText();

    assert.strictEqual(textVysledku, "Výsledek: nezapomen vyplnit kolonky");
  });
  it("nic nevyplneno", async function () {
    odeslat.click();

    const textVysledku = await vysledek.getText();

    assert.strictEqual(textVysledku, "Výsledek: nezapomen vyplnit kolonky");
  });
});
