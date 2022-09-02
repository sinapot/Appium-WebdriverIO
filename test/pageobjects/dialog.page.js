class Dialog{

    //using Accessibility ID
    get appBtn () {return $('~App')};
    get alertDialogsBtn () {return $('~Alert Dialogs')}
    get textEntryBtn () {return $('~Text Entry dialog')}
    get usernameText () {return $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/username_edit"]')};
    get password () { return $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/password_edit"]')}

}
module.exports = new Dialog();