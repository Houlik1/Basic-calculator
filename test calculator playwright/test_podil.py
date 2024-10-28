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

def test_podil_obe_pozitivni(navigace):
    page = navigace
    page.fill("#prvni","15")
    page.fill("#druhy", "3")
    page.select_option("#select","podil")
    button = page.locator("#odeslat")
    button.click()
    vysledek = page.locator("#vysledek").inner_text()
    assert vysledek == "Výsledek: 5"

def test_podil_prvni_negativni(navigace):
    page = navigace
    page.fill("#prvni","-15")
    page.fill("#druhy", "3")
    page.select_option("#select","podil")
    button = page.locator("#odeslat")
    button.click()
    vysledek = page.locator("#vysledek").inner_text()
    assert vysledek == "Výsledek: -5"

def test_podil_druhe_negativni(navigace):
    page = navigace
    page.fill("#prvni","15")
    page.fill("#druhy", "-3")
    page.select_option("#select","podil")
    button = page.locator("#odeslat")
    button.click()
    vysledek = page.locator("#vysledek").inner_text()
    assert vysledek == "Výsledek: -5"

def test_podil_obe_negaitvni(navigace):
    page = navigace
    page.fill("#prvni","-15")
    page.fill("#druhy", "-3")
    page.select_option("#select","podil")
    button = page.locator("#odeslat")
    button.click()
    vysledek = page.locator("#vysledek").inner_text()
    assert vysledek == "Výsledek: 5"
    
def test_deleni_nulou(navigace):
    page = navigace
    page.fill("#prvni","15")
    page.fill("#druhy", "0")
    page.select_option("#select","podil")
    button = page.locator("#odeslat")
    button.click()
    vysledek = page.locator("#vysledek").inner_text()
    assert vysledek == "Výsledek: Nemůžeš dělit nulou"