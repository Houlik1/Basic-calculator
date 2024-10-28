// import selenium
const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");
//spusteni je pres prikaz npx mocha nazev_souboru

describe("testy na soucin", function () {
  let driver;
  let first;
  let second;
  let odeslat;
  let vysledek;
  let select;
  before(async function () {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://127.0.0.1:5500/calc/index.html");
    first = await driver.findElement(By.id("prvni"));
    second = await driver.findElement(By.id("druhy"));
    odeslat = await driver.findElement(By.id("odeslat"));
    vysledek = await driver.findElement(By.id("vysledek"));
    select = await driver.findElement(By.id("select"));
  });
  after(async function () {
    await driver.quit();
  });
  it("pozitivni cisla", async function () {
    await first.sendKeys("5");
    await second.sendKeys("3");
    const option = await select.findElement(By.css("option[value='soucin']"));
    option.click();
    odeslat.click();

    const textVysledku = await vysledek.getText();
    assert.strictEqual(textVysledku, "Výsledek: 15");
  });
  it("prvni cislo negativni", async function () {
    await first.sendKeys("-5");
    await second.sendKeys("3");
    const option = await select.findElement(By.css("option[value='soucin']"));
    option.click();
    odeslat.click();

    const textVysledku = await vysledek.getText();
    assert.strictEqual(textVysledku, "Výsledek: -15");
  });
  it("druhe negativni cislo", async function () {
    await first.sendKeys("5");
    await second.sendKeys("-3");
    const option = await select.findElement(By.css("option[value='soucin']"));
    option.click();
    odeslat.click();

    const textVysledku = await vysledek.getText();
    assert.strictEqual(textVysledku, "Výsledek: -15");
  });
  it("obe negativni cisla", async function () {
    await first.sendKeys("-5");
    await second.sendKeys("-3");
    const option = await select.findElement(By.css("option[value='soucin']"));
    option.click();
    odeslat.click();

    const textVysledku = await vysledek.getText();
    assert.strictEqual(textVysledku, "Výsledek: 15");
  });
});
