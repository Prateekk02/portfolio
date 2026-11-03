import os

import pytest
from selenium import webdriver
from selenium.webdriver.chrome.options import Options as ChromeOptions
from selenium.webdriver.firefox.options import Options as FirefoxOptions

BASE_URL = os.environ.get("BASE_URL", "http://localhost:3100").rstrip("/")


def _make(browser: str) -> webdriver.Remote:
    if browser == "firefox":
        opts = FirefoxOptions()
        opts.add_argument("-headless")
        return webdriver.Firefox(options=opts)
    opts = ChromeOptions()
    opts.add_argument("--headless=new")
    opts.add_argument("--no-sandbox")
    opts.add_argument("--window-size=1280,900")
    if path := os.environ.get("CHROME_BIN"):
        opts.binary_location = path
    return webdriver.Chrome(options=opts)


@pytest.fixture(params=os.environ.get("BROWSERS", "chrome,firefox").split(","))
def driver(request: pytest.FixtureRequest):
    d = _make(request.param)
    d.implicitly_wait(5)
    yield d
    d.quit()


@pytest.fixture
def base_url() -> str:
    return BASE_URL
