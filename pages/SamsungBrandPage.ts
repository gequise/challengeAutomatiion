import { Locator, Page } from '@playwright/test';
import { AbstractPage } from './AbstractPage';
import locators from '../locators/mercadoLibrePage.json';

export class SamsungBrandPage extends AbstractPage {
  readonly page: Page;
  readonly desiredSearch: Locator;
  readonly brandOption: Locator;
  readonly orderByDropDown: Locator;
  readonly lowerPriceOption: Locator;
  readonly priceOption: Locator;
  readonly ItemOptions: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.desiredSearch = page.locator(locators.desiredSearch_Input);
    this.brandOption = page.locator(locators.brand_Option);
    this.orderByDropDown = page.locator(locators.orderby_DropDown);
    this.lowerPriceOption = page.getByRole('option', {
      name: locators.lowerPrice_Option,
    });
    this.priceOption = page.locator(locators.price_Option);
    this.ItemOptions = page.locator(locators.item_Option);
  }

  async samsungPageNavigate() {
    await this.desiredSearch.nth(0).click();
    await this.orderByDropDown.click();
    await this.lowerPriceOption.click();
    const firstPrice = await this.priceOption.first().textContent();
    const secondPrice = await this.priceOption.nth(1).textContent();
    const lastPriceOption = await (
      await this.priceOption.last().innerText()
    ).replace('.', '');
    await this.ItemOptions.first().screenshot({ path: 'firstPrice.png' });
    await this.ItemOptions.nth(1).screenshot({ path: 'secondPrice.png' });
    await this.ItemOptions.last().screenshot({ path: 'lastPrice.png' });
    return { firstPrice, secondPrice, lastPriceOption };
  }
}
