import { Locator, Page } from "@playwright/test";

export class PassengerDetails{
    readonly titleDropDwn:Locator;
    readonly  firstName:Locator;
    readonly lastName:Locator;
    readonly dobDay:Locator;
    readonly dobMonth:Locator;
    readonly dobYear:Locator;
    readonly firstNameErrorMsg:Locator;
    readonly lastNameErrorMsg:Locator;
    readonly dobDayErrorMsg:Locator;
    readonly dobMnthErrorMsg:Locator;
    readonly dobYearErrorMsg:Locator;
    readonly selCountry:Locator;


constructor(page:Page){
    this.titleDropDwn= page.locator("#paxInfoTitle0");//page.selectOption("#paxInfoTitle0","MISS");
    this.firstName=page.locator("#paxInfoFirstName0");
    this.lastName=page.locator("#paxInfoLastName0");
    this.dobDay=page.locator("#paxInfoDobDay0");
    this.dobMonth=page.locator("#paxInfoDobMonth0");
    this.dobYear=page.locator("paxInfoDobYear0");
    this.dobYearErrorMsg=page.locator("#paxInfoDobYear0__errorMessage");
    this.dobMnthErrorMsg=page.locator("#paxInfoDobMonth0__errorMessage");
    this.dobDayErrorMsg=page.locator("#paxInfoDobDay0__errorMessage");
    this.firstNameErrorMsg=page.locator("#paxInfoFirstName0__errorMessage");
    this.lastNameErrorMsg=page.locator("#paxInfoLastName0__errorMessage");
    this.selCountry=page.locator("#paxInfoCountry");
}

async enterPassengerNameDetails(firstname:string,lastname:string,title:string){
    await this.titleDropDwn.selectOption(title);
    await this.firstName.fill(firstname);
    await this.lastName.fill(lastname);

}

async enterDOBDetails(day:string,year:string,month:string){
    await this.dobDay.fill(day);
    await this.dobMonth.fill(month);
    await this.dobYear.fill(year);

}
async selectCountry(country:string){
    await this.selCountry.fill(country);

}

    
}