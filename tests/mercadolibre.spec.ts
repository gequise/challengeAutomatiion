import { test, expect } from '@playwright/test';
import { MercadoLibreHomePage } from '../pages/MercadoLIbreHomePage';
import { SamsungBrandPage } from '../pages/SamsungBrandPage';
import { default as pageData } from '../resources/pageData.json';

test.describe('homepage has title and links to intro page', async () => {let mlPage: MercadoLibreHomePage;
  let samsungPage: SamsungBrandPage;

  test.beforeEach(async ({ page }) => {
    mlPage = new MercadoLibreHomePage(page);
    samsungPage = new SamsungBrandPage(page);

    await mlPage.visit();
  })

  test('Navigate Page', async () => {
    await mlPage.navigateMl();
    await samsungPage.samsungPageNavigate()
    // await samsungPage.assertValues()
    // await expect(samsungPage.FirstPriceOption < samsungPage.SecondPriceOption)
    // await expect(samsungPage.SecondPriceOption < samsungPage.ThirdPriceOption)
  })

});