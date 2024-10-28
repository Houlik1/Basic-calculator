import pytest
from playwright.sync_api import sync_playwright
from playwright.sync_api import Error

@pytest.fixture()
def navigace():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page   = browser.new_page()
        page.goto("http://127.0.0.1:5500/calcul/index.html")
        
        yield page
        page.close()
        browser.close()

def test_rozdil_obe_pozitivni(navigace):
    page = navigace
    page.fill("#prvni","25")
    page.fill("#druhy", "35")
    page.select_option("#select","rozdil")
    button = page.locator("#odeslat")
    button.click()
    vysledek = page.locator("#vysledek").inner_text()
    assert vysledek == "Výsledek: -10"

def test_rozdil_prvni_negativni(navigace):
    page = navigace
    page.fill("#prvni","-25")
    page.fill("#druhy", "35")
    page.select_option("#select","rozdil")
    button = page.locator("#odeslat")
    button.click()
    vysledek = page.locator("#vysledek").inner_text()
    assert vysledek == "Výsledek: -60"

def test_rozdil_druhe_negativni(navigace):
    page = navigace
    page.fill("#prvni","25")
    page.fill("#druhy", "-35")
    page.select_option("#select","rozdil")
    button = page.locator("#odeslat")
    button.click()
    vysledek = page.locator("#vysledek").inner_text()
    assert vysledek == "Výsledek: 60"
def test_rozdil_obe_negativni(navigace):
    page = navigace
    page.fill("#prvni","-25")
    page.fill("#druhy", "-35")
    page.select_option("#select","rozdil")
    button = page.locator("#odeslat")
    button.click()
    vysledek = page.locator("#vysledek").inner_text()
    assert vysledek == "Výsledek: 10"