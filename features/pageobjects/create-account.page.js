

const Page = require('./page');


class CreateAccountPage extends Page {

    get buttonClosePage () {
        return $('//android.widget.ImageButton[@content-desc="Navigate up"]');
    }

    async CloseCreateAccountPage () {
      await this.buttonClosePage.click();
    }

}

module.exports = new CreateAccountPage();
