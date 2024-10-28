// import selenium
const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");
//spusteni je pres prikaz npx mocha nazev_souboru

describe("testy na rozdil", function () {
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
    await first.sendKeys("25");
    await second.sendKeys("35");
    const option = await select.findElement(By.css("option[value='rozdil']"));
    option.click();
    odeslat.click();

    const textVysledku = await vysledek.getText();
    assert.strictEqual(textVysledku, "Výsledek: -10");
  });
  it("prvni negativni cislo", async function () {
    await first.sendKeys("-25");
    await second.sendKeys("35");
    const option = await select.findElement(By.css("option[value='rozdil']"));
    option.click();
    odeslat.click();

    const textVysledku = await vysledek.getText();
    assert.strictEqual(textVysledku, "Výsledek: -60");
  });
  it("druhe negativni cislo", async function () {
    await first.sendKeys("25");
    await second.sendKeys("-35");
    const option = await select.findElement(By.css("option[value='rozdil']"));
    option.click();
    odeslat.click();

    const textVysledku = await vysledek.getText();
    assert.strictEqual(textVysledku, "Výsledek: 60");
  });
  it("obe negativni", async function () {
    await first.sendKeys("-25");
    await second.sendKeys("-35");
    const option = await select.findElement(By.css("option[value='rozdil']"));
    option.click();
    odeslat.click();

    const textVysledku = await vysledek.getText();
    assert.strictEqual(textVysledku, "Výsledek: 10");
  });
});
