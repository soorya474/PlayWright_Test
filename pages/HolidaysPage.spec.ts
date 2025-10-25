import { Locator, Page } from "@playwright/test";

export class HolidaysPage{
    readonly contBtn:Locator;
    readonly page:Page;
    //readonly hotel:Locator;

    constructor(page:Page){
        this.page=page;
        this.contBtn=page.getByRole('button', { name: /^continue$/i });
        //this.hotel=page.getByTestId('search-results-list').filter({hasText:/Best Western Plus Amedia Art Salzburg/}).getByTestId('continue-button');
        

    }

async clickOnContinue(){
    await this.contBtn.first().click();
}


    
}
