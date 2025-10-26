import { Locator, Page } from "@playwright/test";

export class HotelPage {
    readonly continueBtn: Locator;
    readonly page: Page;

    constructor(page: Page) {
        this.page = page
        this.continueBtn = page.locator("//button[contains(text(),'Continue')]");

    }

    async clickOnContinueBtn() {
        await this.continueBtn.click();
    }
}
