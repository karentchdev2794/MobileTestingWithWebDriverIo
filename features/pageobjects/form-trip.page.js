

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FormTripPage extends Page {
    /**
     * define selectors using getter methods
     */
    get buttonDestination () {
        return $('//android.widget.TextView[@resource-id="com.booking:id/facet_search_box_basic_field_label" and @text="Enter your destination"]');
    }

    get InputEnterDestination () {
        return $('//android.widget.EditText[@resource-id="com.booking:id/facet_with_bui_free_search_booking_header_toolbar_content"]');
    }

    InputSelectDestination(place) {
        return $('//android.widget.TextView[@resource-id="com.booking:id/view_disambiguation_destination_title" and @text="'+place+'"]');
    }

    get buttonDates () {
        return $('//android.widget.TextView[@resource-id="com.booking:id/facet_search_box_basic_field_label" and @text="Enter your destination"]');
    }
    buttonInitialDate (initialDate) {
        return $('//android.view.View[@content-desc="'+initialDate+'"]');
    }
    buttonFinalDate (finalDate) {
        return $('//android.view.View[@content-desc="'+finalDate+'"]');
    }

    get buttonConfirmDates () {
        return $('//android.widget.Button[@resource-id="com.booking:id/facet_date_picker_confirm"]');
    }

    get buttonSelectRoomsGuest () {
        return $('//android.widget.TextView[@resource-id="com.booking:id/facet_search_box_basic_field_label" and @text="1 room · 2 adults · 0 children"]');
    }
    
    get buttonAddRooms () {
        return $('(//android.widget.Button[@resource-id="com.booking:id/bui_input_stepper_add_button"])[1]');
    }

    get buttonRemoveRooms () {
        return $('(//android.widget.Button[@resource-id="com.booking:id/bui_input_stepper_remove_button"])[1]');
    }
    get buttonAddAddults () {
        return $('(//android.widget.Button[@resource-id="com.booking:id/bui_input_stepper_add_button"])[2]');
    }

    get buttonRemoveAddults () {
        return $('(//android.widget.Button[@resource-id="com.booking:id/bui_input_stepper_remove_button"])[2]');
    }
    get buttonAddChildrens () {
        return $('(//android.widget.Button[@resource-id="com.booking:id/bui_input_stepper_add_button"])[3]');
    }

    get buttonRemoveChldrens() {
        return $('(//android.widget.Button[@resource-id="com.booking:id/bui_input_stepper_remove_button"])[3]');
    }
  
    buttonAgeChild(age) {
        return $('//android.widget.Button[@text="'+age+'"]');
    }
    
    get buttonConfirmAgeChild() {
        return $('//android.widget.Button[@resource-id="android:id/button1"]');
    }

    get buttonConfirmRoomsGuest() {
        return $('//android.widget.Button[@resource-id="com.booking:id/group_config_apply_button"]');
    }

    get btnSearchReserve () {
        return $('//android.widget.Button[@resource-id="com.booking:id/facet_search_box_cta"]');
    }


    async fillFormTrip(destination, initialDate, finalDate, rooms, adults, childrens, age) {
        await this.buttonDestination.click();
        await this.InputEnterDestination.setValue(destination);
        await this.InputSelectDestination(destination).click();
        await this.buttonDates.click();
        await this.buttonInitialDate(initialDate).click();
        await this.buttonFinalDate(finalDate).click();
        await this.buttonConfirmDates.click();
        await this.buttonSelectRoomsGuest.click();
        for (let i = 1; i < rooms; i++) {
            await this.buttonAddRooms.click();
        }
        for (let i = 1; i < adults; i++) {
            await this.buttonAddAddults.click();
        }
        for (let i = 1; i < childrens; i++) {
            await this.buttonAddChildrens.click();
            await this.buttonAgeChild(age).click();
            await this.buttonConfirmAgeChild().click();
        }
        await this.buttonConfirmRoomsGuest.click();
        await this.btnSearchReserve.click();
    }
}

module.exports = new LoginPage();
