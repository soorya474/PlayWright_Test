import test from "@playwright/test";
import {HomePage }from "../pages/HomePage.spec"
import { HolidaysPage } from "../pages/HolidaysPage.spec";
import { HotelPage } from "../pages/HotelPage.spec";
import { CustomiseHolidaysPage } from "../pages/CustomiseHolidayPage.spec";
import { PassengerDetails } from "../pages/PassengerDetailsPage.spec";
import { TestData } from "../testData/testData.spec";


test('Login test',async({page})=>{
const home=new HomePage(page);
const holPage=new HolidaysPage(page);
const hotelpg=new HotelPage(page);
const custHols=new CustomiseHolidaysPage(page);
const PassdEtails=new PassengerDetails(page);
await home.navigateToHomePage();
await home.clickOnAcceptBtn();
await home.selectDepartureAirport();
await home. clickOnAllowDeals();

await home.selectDestination();
await home.selDepartureDate();
await home.selNoOfPersons();
await home.selectChildAge(TestData.tc01.childAge);
await home.clickOnSearchBtn();
//await holPage.clickOnContinue();

await hotelpg.clickOnContinueBtn();
await custHols.clickOnContinueDetails();
await PassdEtails.clickOnContinuePay();
await PassdEtails.valErrorMsgIsPresent();






});