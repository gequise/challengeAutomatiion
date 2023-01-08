import { test, expect } from "@playwright/test";
import { MercadoLibreHomePage } from "../pages/MercadoLIbreHomePage";
import { SamsungBrandPage } from "../pages/SamsungBrandPage";
import { default as pageData } from "../resources/pageData.json";

test.describe("homepage has title and links to intro page", async () => {
  let mlPage: MercadoLibreHomePage;
  let samsungPage: SamsungBrandPage;

  test.beforeEach(async ({ page }) => {
    mlPage = new MercadoLibreHomePage(page);
    samsungPage = new SamsungBrandPage(page);

    await mlPage.visit();
  });

  test("Navigate Page and check the price to samsung phones", async () => {
    await mlPage.navigateMl();
    const { firstPrice, secondPrice, lastPriceOption } =
      await samsungPage.samsungPageNavigate();
    await test.step('Prices List', async() =>{
      	return console.log("Prices: ",'\n', firstPrice,'\n', secondPrice, '\n', lastPriceOption)
    })
    expect(Number(firstPrice)).toBeLessThanOrEqual(Number(secondPrice));
    expect(Number(secondPrice)).toBeLessThanOrEqual(Number(lastPriceOption));
  });
});
