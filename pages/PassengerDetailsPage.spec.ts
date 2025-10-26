import { expect, Locator, Page } from "@playwright/test";

export class PassengerDetails {
    readonly titleDropDwn: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly dobDay: Locator;
    readonly dobMonth: Locator;
    readonly dobYear: Locator;
    readonly firstNameErrorMsg: Locator;
    readonly lastNameErrorMsg: Locator;
    readonly dobDayErrorMsg: Locator;
    readonly dobMnthErrorMsg: Locator;
    readonly dobYearErrorMsg: Locator;
    readonly leadtitleErrorMsg: Locator;
    readonly titleErrorMsg: Locator;
    readonly selCountry: Locator;
    readonly dobErrorMsg: Locator;
    readonly phoneErrorMsg: Locator;
    readonly emailErrorMsg: Locator;
    readonly infoCheckBox: Locator;
    readonly continuePayBtn: Locator;
    readonly addresErrorMsg: Locator;
    readonly fNameErrorMsg: Locator;
    readonly lNameErrorMsg: Locator;
    readonly adultErrorMsg: Locator;


    constructor(page: Page) {
        this.titleDropDwn = page.locator("#paxInfoTitle0");//page.selectOption("#paxInfoTitle0","MISS");
        this.firstName = page.locator("#paxInfoFirstName0");
        this.lastName = page.locator("#paxInfoLastName0");
        this.dobDay = page.locator("#paxInfoDobDay0");
        this.dobMonth = page.locator("#paxInfoDobMonth0");
        this.dobYear = page.locator("#paxInfoDobYear0");
        this.fNameErrorMsg = page.locator("#paxInfoFirstName1__errorMessage");
        this.lNameErrorMsg = page.locator("#paxInfoLastName1__errorMessage");
        this.dobYearErrorMsg = page.locator("#paxInfoDobYear0__errorMessage");
        this.dobMnthErrorMsg = page.locator("#paxInfoDobMonth0__errorMessage");
        this.dobDayErrorMsg = page.locator("#paxInfoDobDay0__errorMessage");
        this.firstNameErrorMsg = page.locator("#paxInfoFirstName0__errorMessage");
        this.lastNameErrorMsg = page.locator("#paxInfoLastName0__errorMessage");
        this.leadtitleErrorMsg = page.locator("//select[@id='paxInfoTitle0']/parent::div/following-sibling::span[contains(text(),'Please select a title.')]");
        this.dobErrorMsg = page.locator('[aria-label="lead passenger DOB"] .inputs__error').filter({ hasText: 'Please use the format DD/MM/YYYY' })
        this.titleErrorMsg = page.locator("//select[@id='paxInfoTitle1']/parent::div/following-sibling::span[contains(text(),'Please select a title.')]");
        this.addresErrorMsg = page.locator("#paxInfoAddressLookup__errorMessage");
        this.selCountry = page.locator("#paxInfoCountry");
        this.adultErrorMsg = page.locator('.Adult__slabWrapper .inputs__error');
        this.phoneErrorMsg = page.locator("#paxInfoTelephone__errorMessage");
        this.emailErrorMsg = page.locator("#paxInfoEmail__errorMessage");
        this.continuePayBtn = page.locator("//button[contains(text(),'Continue To Payment')]");
        this.infoCheckBox = page.locator('.ImportantInformation__content').filter({ has: page.locator('input[type="checkbox"]') });
    }
    /**
     * Method eneters the passenger details
     * @param firstname 
     * @param lastname 
     * @param title 
     */

    async enterPassengerNameDetails(firstname: string, lastname: string, title: string) {
        await this.titleDropDwn.selectOption(title);
        await this.firstName.fill(firstname);
        await this.lastName.fill(lastname);

    }
    /**
     * Method enters DOB details
     * @param day 
     * @param month 
     * @param year 
     */

    async enterDOBDetails(day: string, month: string, year: string) {
        await this.dobDay.fill(day);
        await this.dobMonth.fill(month);
        await this.dobYear.fill(year);

    }
    /**
     * Method selects the country
     * @param country 
     */
    async selectCountry(country: string) {
        await this.selCountry.fill(country);

    }
    /**
     * Method to click on continue
     */

    async clickOnContinuePay() {
        await this.continuePayBtn.click();
    }
    /**
     * Clicks on checkbox
     */
    async clickOnCheckBox() {
        await this.infoCheckBox.check();
    }
    /**
     * Validates the presence of errormesssage
     */
    async valErrorMsgIsPresent() {

        const errorMsgs = [this.leadtitleErrorMsg, this.firstNameErrorMsg, this.lastNameErrorMsg, this.dobErrorMsg, this.addresErrorMsg, this.phoneErrorMsg, this.emailErrorMsg, this.titleErrorMsg, this.fNameErrorMsg, this.lNameErrorMsg]
        for (const errors of errorMsgs)
            await expect(errors).toBeVisible();

    }


}