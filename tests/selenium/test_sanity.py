"""Cross-browser sanity checks. Playwright holds the full e2e suite; this is a
small second-engine (WebDriver, Chrome and Firefox) check of the core journeys."""

from selenium.webdriver.common.by import By


def test_home_shows_the_headline(driver, base_url):
    driver.get(base_url + "/")
    h1 = driver.find_element(By.TAG_NAME, "h1")
    assert "language models into software you can trust" in h1.text


def test_navigation_reaches_each_section(driver, base_url):
    for name in ["Projects", "Experience", "Blog", "Contact"]:
        driver.get(base_url + "/")
        driver.find_element(By.CSS_SELECTOR, f'nav[aria-label="Main"] a[href="/{name.lower()}"]').click()
        assert driver.current_url.rstrip("/").endswith("/" + name.lower())
        assert len(driver.find_elements(By.TAG_NAME, "h1")) == 1


def test_theme_toggle_switches_the_dark_class(driver, base_url):
    driver.get(base_url + "/")
    html = driver.find_element(By.TAG_NAME, "html")
    before = "dark" in (html.get_attribute("class") or "")
    driver.find_element(By.CSS_SELECTOR, 'button[aria-label^="Switch to"]').click()
    after = "dark" in (html.get_attribute("class") or "")
    assert before != after


def test_unknown_route_shows_the_not_found_page(driver, base_url):
    driver.get(base_url + "/definitely-not-a-page")
    assert "not found" in driver.find_element(By.TAG_NAME, "body").text.lower()


def test_case_study_opens_from_projects(driver, base_url):
    driver.get(base_url + "/projects")
    driver.find_element(By.PARTIAL_LINK_TEXT, "Read the case study").click()
    assert "/projects/" in driver.current_url
    assert driver.find_element(By.TAG_NAME, "h1").text


def test_header_stays_inside_the_viewport_on_a_phone(driver, base_url):
    driver.set_window_size(390, 800)
    driver.get(base_url + "/")
    width = driver.execute_script("return document.documentElement.scrollWidth - window.innerWidth")
    assert width <= 0
