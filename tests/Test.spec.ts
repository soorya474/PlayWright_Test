import test, { chromium } from "@playwright/test";

test('Login test',async({context,page})=>{
await page.goto("https://www.tui.co.uk/");
await context.clearCookies();
 
await page.getByRole('button', { name: /accept|agree|allow all/i }).click();
await page.getByTestId("input_departure-airport").click();
await page.locator("#airport-list-primary").filter({has: page.locator('[aria-disabled="false"]')}).first().click();
await context.clearCookies();
await page.locator("button[data-testid='inputIcon_destinations']").click();
const places=page.locator("span[aria-disabled='false']");
await places.first().click();
await page.getByTestId("input_departure-date").click();
await page.locator("[class='day available']").first().click();
await page.getByTestId("input_pax-and-rooms").click();
await page.locator("button[aria-label='nonAdults plus']").click();
await page.selectOption("#child-age","2");
await page.getByTestId("search-button").click();

await page.getByRole('button', { name: /accept|agree|allow all/i }).click();
//await page.getByRole('button', { name: /continue/i }).first().click();
//co//nst hotelcard= page.locator('.SearchResults__searchResultsLists', { hasText: '' });
await page.getByTestId("continue-button").first().click();
await page.locator("//span[contains(text(),'Dates & Flights')]").click();
await page.locator("//button[contains(text(),'Continue')]").click();
await page.locator("//button[contains(text(),'Continue To Passenger Details')]").click();
await page.selectOption("#paxInfoTitle0","MISS");
await page.locator("#paxInfoFirstName0").fill("soorya");
await page.locator("#paxInfoFirstName0__errorMessage").isVisible();
await page.locator("#paxInfoLastName0__errorMessage").isVisible();
await page.locator("#paxInfoLastName0").fill("soorya");
await page.locator("#paxInfoDobDay0").fill("05");
await page.locator("#paxInfoDobMonth0").fill("11");
await page.locator("paxInfoDobYear0").fill("2000");
await page.locator("#paxInfoDobYear0__errorMessage").isVisible();
await page.selectOption("#paxInfoCountry","AL");

await page.locator("//span[contains(text(),'Enter address manually')]").click();
await page.locator("#paxInfoAddressLookup").fill("asdggggggg");













//await page.getByRole('tab', { name: /flights/i }).click();

//await page.locator('[aria-label="Fly from"]').filter({has:page.getByPlaceholder("Choose airport")}).first().click();
// await page.waitForTimeout(1000);
// await page.getByTestId("originAirports").locator("#BHD").click();
// //await page.pause();
// await page.waitForTimeout(1000);
// //await page.locator('[aria-label="Fly to"]').filter({has:page.getByPlaceholder("Choose destination")}).first().click();
// await page.locator('[aria-label="Fly to"]').filter({has:page.getByPlaceholder("Choose destination")}).first().click();
// await page.waitForTimeout(1000);
// await page.locator("#oneway").check();
// await page.getByTestId("destinationAirports").locator("#PMI").click();

// const dates=page.locator("div[class*='available']")
// await dates.first().click();
// await page.locator("#searchField-pax").click();
// await page.selectOption('#travelPartySelectAdults', '2');
// await page.selectOption('#travelPartySelectChildren','1');
// await page.getByTestId("searchButton").click();
// await page.locator("//button[contains(text(),'Continue')]").click();






})