import { expect, Locator, Page } from "@playwright/test";
import { AbstractPage } from "./AbastractPage";

export class SamsungBrandPage extends AbstractPage {
  
  readonly page: Page
  readonly desiredSearch: Locator
  readonly brandOption: Locator
  readonly orderByDropDown: Locator
  readonly lowerPriceOption: Locator
  readonly FirstPriceOption: Locator
  readonly SecondPriceOption: Locator
  readonly ThirdPriceOption: Locator
  readonly ItemOptions: Locator


  constructor(page: Page){
    super(page);
    this.page = page
    this.desiredSearch = page.getByRole('link', { name: '1º MÁS DESEADA Primera imagen para búsqueda de samsung Segunda imagen para búsqueda de samsung Tercera imagen para búsqueda de samsung Samsung' })
    this.brandOption = page.locator('.ui-search-carousel__item')
    this.orderByDropDown = page.locator('//span[@class="andes-dropdown__display-values"]')
    this.lowerPriceOption = page.getByRole('option', { name: 'Menor precio' })
    this.FirstPriceOption = page.locator('//span[contains(@class,"price-tag-fraction")]')
    this.SecondPriceOption = page.locator('//span[contains(@class,"price-tag-fraction")]')
    this.ThirdPriceOption = page.locator('//span[contains(@class,"price-tag-fraction")]')
    this.ItemOptions = page.locator('//li[contains(@class,"ui-search-layout__item shops__layout-item")]')
  }

  async samsungPageNavigate(){
    await this.desiredSearch.click()
    await this.brandOption.first().click()
    await this.orderByDropDown.click()
    await this.lowerPriceOption.click()
    await this.ItemOptions.first().screenshot({path: 'firstPrice.png'})
    const firstPrice = await this.FirstPriceOption.first().textContent()
    console.log("FirstPrice: ", firstPrice )
    const secondPrice = await this.SecondPriceOption.nth(1).textContent();
    await this.ItemOptions.nth(1).screenshot({path: 'secondPrice.png'})
    console.log("SecondPrice: ", secondPrice )
    expect(Number(firstPrice)).toBeLessThanOrEqual(Number(secondPrice))
    await this.ItemOptions.last().screenshot({path: 'thirdPrice.png'})
    const thirdPrice = await (await this.ThirdPriceOption.last().innerText()).replace(".", "")
    console.log("ThirdPrice: ", thirdPrice )

  }


}