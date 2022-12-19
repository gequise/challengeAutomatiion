import { Locator, Page } from "@playwright/test";
import { AbstractPage } from "./AbastractPage";


export class MercadoLibreHomePage extends AbstractPage {
  
  readonly page: Page
  readonly categoryLink: Locator
  readonly technologyOption: Locator
  readonly cellAndPhonesOption: Locator


  constructor(page: Page){
    super(page);
    this.page = page
    this.categoryLink = page.locator('//a[@class="nav-menu-categories-link"]')
    this.technologyOption = page.locator('//a[normalize-space()="Tecnología"]')
    this.cellAndPhonesOption = page.locator('text=Smartphones')
    

  }

  async visit(){
    const appURL = 'https://www.mercadolibre.com.ar/'
    await this.page.goto(appURL)
  }

  async navigateMl(){
    await this.categoryLink.click()
    await this.technologyOption.hover()
    await this.cellAndPhonesOption.click()
  }
}