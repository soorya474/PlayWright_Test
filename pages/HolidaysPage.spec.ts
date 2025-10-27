import { Locator, Page } from "@playwright/test";

export class HolidaysPage {
    readonly contBtn: Locator;
    readonly page: Page;
    readonly hotel:Locator;

    constructor(page: Page) {
        this.page = page;
        this.contBtn = page.getByRole('button', { name: /^continue$/i });
        this.hotel=page.locator('h5')
      //  this.hotel=page.getByTestId('search-results-list').filter({hasText:'hotelName'}).getByTestId('continue-button');


    }

    async clickOnContinue() {
        await this.contBtn.waitFor({ state: 'visible' });
        await this.contBtn.first().click();
        let hotelSel=await this.hotel.first().textContent();
        console.log("Selected hotel is"+hotelSel);
    }



}
