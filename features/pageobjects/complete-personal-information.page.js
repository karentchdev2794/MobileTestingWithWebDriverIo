const Page = require('./page');

class CompletePersonalInformationPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputFirstName() {
        return $('(//android.widget.EditText[@resource-id="com.booking:id/bui_input_container_content"])[1]');
    }

    get inputLastName() {
        return $('(//android.widget.EditText[@resource-id="com.booking:id/bui_input_container_content"])[1]');
    }

    get inputEmailAddress() {
        return $('(//android.widget.AutoCompleteTextView[@resource-id="com.booking:id/bui_input_container_content"])[1]');
    }

    inputCountry(country) {
        return $('//android.widget.AutoCompleteTextView[@resource-id="com.booking:id/bui_input_container_content and @text="' + country + '"]');
    }
    inputMobileNumber() {
        return $('//android.widget.EditText[@resource-id="com.booking:id/bui_input_container_content"');
    }
    get buttonSelectPurposeBussiness() {
        return $('(//android.widget.RadioButton[@resource-id="com.booking:id/business_purpose_business"]');
    }
    get buttonSelectPurposeLeisure() {
        return $('(//android.widget.RadioButton[@resource-id="com.booking:id/business_purpose_leisure"]');
    }

    get buttonNextSteps() {
        return $('//android.widget.Button[@resource-id="com.booking:id/action_button"]');
    }

    get buttonFinalStepSteps() {
        return $('//android.widget.Button[@resource-id="com.booking:id/action_button"]');
    }

    get ButtonClose(){
        return $('//android.widget.ImageView[@content-desc="Close"]');
    }

    get textConfirmation(){
        return $('//android.widget.TextView[@resource-id="com.booking:id/pb_reservation_header_title"]');
    }

    async CompletePersonalInformation(firstName, lastName, email, country, number) {
        await this.inputFirstName.setValue(firstName);
        await this.inputLastName.setValue(lastName);
        await this.inputEmailAddress.setValue(email);
        await this.inputCountry(country).click();
        await this.inputMobileNumber.setValue(number);
        await this.buttonSelectPurposeLeisure.click();
        await this.buttonNextSteps.click();
        await this.buttonFinalSteps.click();
        await this.ButtonClose.click();
    }

    async ConfirmReservation(){
         confirmation == await this.textConfirmation.getText();
         expect(confirmation).to.equal('Your booking is confirmed');
    }
}

module.exports = new CompletePersonalInformationPage();
