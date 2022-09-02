const dialog = require('../pageobjects/dialog.page')

describe('Alert Dialogs', async() => {
    it('Verify Text Entry dialog is editable', async () => {
        await dialog.appBtn.click();
        await dialog.alertDialogsBtn.click();
        await dialog.textEntryBtn.click();

        await dialog.usernameText.addValue('Lorem Ipsum');
        await dialog.usernameText.clearValue()

        await dialog.password.clearValue();
        await dialog.password.addValue('Lorem Ipsum')
        await dialog.password.clearValue();


    });
});


