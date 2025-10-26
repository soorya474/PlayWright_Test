import { Locator, Page } from "@playwright/test";

export class HomePage {

    readonly page: Page;
    readonly cookiesAcceptBtn: Locator;
    readonly departureAirportTxtBox: Locator;
    readonly airportList: Locator;
    readonly destinationTxtBox: Locator;
    readonly availablePlaces: Locator;
    readonly departureDateTxtBox: Locator;
    readonly selDate: Locator;
    readonly selPersonsBox: Locator;
    readonly incrementChild: Locator;
    readonly dealAcceptBtn:Locator;
    readonly childAge: Locator;
    readonly searchBtn: Locator


    constructor(page: Page) {
        this.page = page;
        this.cookiesAcceptBtn = page.getByRole('button', { name: /accept|agree|allow all/i });
        this.departureAirportTxtBox = page.getByTestId("input_departure-airport");
        this.airportList = page.locator("#airport-list-primary").filter({ has: page.locator('[aria-disabled="false"]') });
        this.destinationTxtBox =page.getByTestId("inputIcon_destinations");// page.locator("button[data-testid='inputIcon_destinations']");
        this.availablePlaces = page.locator("span[aria-disabled='false']");
        this.departureDateTxtBox = page.getByTestId("input_departure-date");
        this.selDate = page.locator("[class='day available']");
        this.selPersonsBox = page.getByTestId("input_pax-and-rooms");
        this.incrementChild = page.locator("button[aria-label='nonAdults plus']");
        this.childAge = page.locator("#child-age");
        this.searchBtn = page.getByTestId("search-button")
        this.dealAcceptBtn=page.getByRole('button',{name:'ALLOW'});
    }
    /**
     * 
     * Navigates to home page
     */

    async navigateToHomePage(){
        await this.page.goto("https://www.tui.co.uk/");
    }
    /**
     * click on Accept
     */

    async clickOnAcceptBtn() {
        await this.cookiesAcceptBtn.click();

    }
    /**
     * This method selects any available airport
     */
    async selectDepartureAirport() {
        
        await this.departureAirportTxtBox.click();
        await this.airportList.waitFor({ state: 'visible' });
        await this.airportList.first().click();

    }
    /**
     * This method selects any destination
     */
    async selectDestination() {
        await this.destinationTxtBox.click();
        await this.availablePlaces.first().click();
        const destination=await this.destinationTxtBox.getAttribute('placeholder');
        console.log("Selected Destination:", destination);
    }
    /**
     * This method selects any available departuredate
     */
    async selDepartureDate() {
        await this.departureDateTxtBox.click();
        await this.selDate.first().click();
        const selectedDate = await this.departureDateTxtBox.getAttribute('placeholder');
        console.log("Selected Departure Date:", selectedDate);
    }
    /**
     * This method selects number of persons
     */
    async selNoOfPersons() {
        await this.selPersonsBox.click();
        await this.incrementChild.click();
        const selPersons = await this.selPersonsBox.getAttribute('placeholder');
        console.log("Selected Persons:", selPersons);

    }
    async clickOnAllowDeals(){
        this.page.pause()
        await this.dealAcceptBtn.click();
    }
    /**
     * 
     * @param age 
     * This method selects age of the kid
     */
    async selectChildAge(age: string) {
        await this.childAge.selectOption(age);
        const selAge = await this.childAge.inputValue();
        console.log("Selceted child age is"+selAge);


    }

    async clickOnSearchBtn() {
        await this.searchBtn.click();

    }
}