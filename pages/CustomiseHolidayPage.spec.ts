import { Locator, Page } from "@playwright/test";

export class CustomiseHolidaysPage {
    readonly continueDetailsBtn: Locator;
    readonly page: Page;

    constructor(page: Page) {
        this.page = page
        this.continueDetailsBtn = page.locator("//button[contains(text(),'Continue To Passenger Details')]");

    }

    /**
     * Method clicks on continue
     */

    async clickOnContinueDetails() {
        await this.continueDetailsBtn.click();
    }
}
