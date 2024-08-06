const { Given, When, Then } = require('@wdio/cucumber-framework');

const NotificationsPage = require('../feature/pageobjects/notification.page');
const FormTripPage = require('../pageobjects/form-trip.page');
const CompletePersonalInformationPage = require('../pageobjects/complete-personal-information.page');
const CreateAccountPage = require('../pageobjects/create-account.page');
const SelectRoomPage = require('../pageobjects/select-room.page');
const completePersonalInformationPage = require('../pageobjects/complete-personal-information.page');

const pages = {
    notificationsPage: NotificationsPage,
    formTripPage: FormTripPage,
    createAccountPage: CreateAccountPage,
    completePersonalInformationPage: CompletePersonalInformationPage,
    selectRoomPage: SelectRoomPage
}

Given(/^I am user the booking App$/, async () => {
    await notificationsPage.SendNotifications();
    await createAccountPage.CloseCreateAccountPage();
});
When(/^I complete the place of trip with next data$/, async (table) => {
    let data = table.rowsHash();
    let destination = data.destination; 
    let initialDate = data.initialDate;
    let finalDate = data.finalDate;
    let rooms = data.rooms;
    let adults = data.adults;
    let childrens = data.childrens;
    let age = data.age;
    await formTripPage.fillFormTrip(destination, initialDate, finalDate, rooms, adults, childrens, age);
});

When(/^I select the room of my preference$/, async (table) => {
    let data = table.rowsHash();
    let room = data.room;
    await selectRoomPage.SelectRoom(room);
});

When(/^I click the button Reserve$/, async () => {
    await selectRoomPage.ReserveRoom();
});
When(/^I complete my personal information$/, async (table) => {
    let data = table.rowsHash();
    let firstName = data.firstName;
    let lastName = data.lastName;
    let email = data.email;
    let country = data.country;
    let mobile_phone = data.mobile_phone;
    await completePersonalInformationPage.CompletePersonalInformation(firstName, lastName, email, country, mobile_phone);
});

When(/^I confirm the reservation$/, async () => {
    await completePersonalInformationPage.ConfirmReservation();
});

Then(/^I see the message "Your booking is confirmed"$/, async () => {
    await completePersonalInformationPage.ConfirmReservation();
});

