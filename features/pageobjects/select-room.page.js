
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SelectRoomPage extends Page {
  /**
   * define selectors using getter methods
   */
  buttonRooms(nameRoom) {
    return $('//android.widget.TextView[@text="' + nameRoom + '"]');
  }
  get buttonSeeAvailable() {
    return $('//android.widget.FrameLayout[@resource-id="com.booking:id/property_availability_cta_facetframe"]/android.view.ViewGroup');
  }
  get buttonChooseYourStay() {
    return $('//android.widget.LinearLayout[@resource-id="com.booking:id/rooms_item_select_layout"]');
  }
  get buttonReserve() {
    return $('//android.widget.Button[@resource-id="com.booking:id/main_action"]');
  }
  async SelectRoom(room) {
    await this.buttonRooms(room).click();
    await this.buttonSeeAvailable.click();
    await this.buttonChooseYourStay.click();
  }
  async ReserveRoom() {
    await this.buttonReserve.click();
  }
}

module.exports = new SelectRoomPage();
