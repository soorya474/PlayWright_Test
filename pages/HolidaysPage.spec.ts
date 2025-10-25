import { Locator, Page } from "@playwright/test";

export class HolidaysPage{
    readonly continueBtn:Locator;
    readonly page:Page;

    constructor(page:Page){
        this.page=page
        this.continueBtn=page.getByTestId("continue-button");

    }

    async clickOnAnyHotel(){
        await this.continueBtn.click();
    }

    
}