import { Locator, Page } from "@playwright/test";

export class HolidaysPage{
    readonly contBtn:Locator;
    readonly page:Page;

    constructor(page:Page){
        this.page=page;
        this.contBtn=page.getByRole('button', { name: /^continue$/i });
        // page.locator('.ResultListItemV2__buttonWrapper').getByRole('button', { name: /^continue$/i })
        //page.getByRole('button', { name: /^continue$/i });
        //page.getByTestId('continue-button').locator('button');

    }

    async clickOnAnyHotel(){
      //  await this.contBtn.waitFor({ state: 'visible' });
        await this.contBtn.click();
    }

    
}