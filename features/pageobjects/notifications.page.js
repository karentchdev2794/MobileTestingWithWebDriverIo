

const Page = require('./page');


class NotificationsPage extends Page {

    get buttonDontAllowNotifications() {
        return $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_deny_button"]');
    }

    get buttonAllowNotifications() {
        return $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]');
    }

    async SendNotifications() {
        
        await this.buttonDontAllowNotifications.click();
    }

}

module.exports = new NotificationsPage();
