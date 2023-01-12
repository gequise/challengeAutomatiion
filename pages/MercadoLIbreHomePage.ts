import { Locator, Page } from "@playwright/test";
import { AbstractPage } from "./AbastractPage";
import locators  from "../locators/mercadoLibrePage.json"

export class MercadoLibreHomePage extends AbstractPage {
  readonly page: Page;
  readonly categoryLink: Locator;
  readonly technologyOption: Locator;
  readonly cellAndPhonesOption: Locator;
  readonly cpa: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.categoryLink = page.locator(locators.category_Link);
    this.technologyOption = page.locator(locators.technology_Option);
    this.cellAndPhonesOption = page.locator(locators.cellandphones_Option);
    this.cpa = page.locator(locators.cpa_popup);
  }

  async navigateMl() {
    await this.page.goto("/");
    await this.cpa.click();
    await this.page.keyboard.press("Escape");
    await this.categoryLink.click();
    await this.technologyOption.hover();
    await this.cellAndPhonesOption.click();
  }
}
