const dialog = require('../../pageobjects/dialog.page')

describe('Alert Dialogs', async() => {

    it('Verify Text Entry dialog is editable', async () => {
        
        //refer to the Page Objects how this finds elements
        await dialog.appBtn.click();
        await dialog.alertDialogsBtn.click();
        await dialog.textEntryBtn.click();
        //finding elemetns by xPath with resource ID
        await dialog.usernameText.addValue('Lorem Ipsum');
        await dialog.usernameText.clearValue()

        await dialog.password.clearValue();
        await dialog.password.addValue('Lorem Ipsum')
        await dialog.password.clearValue();

        //finding by text - assertion
        const textDialog = await $('//android.widget.TextView[@text="Text Entry dialog"]');
        await expect(textDialog).toHaveText("Text Entry dialog");
    });

    //https://webdriver.io/docs/selectors#android-uiautomator
    it('Finding Element by UIAutomator UISelector', async () => {

        //using UIAutomator .textContais
        await driver.launchApp()
        await $('android=new UiSelector().textContains("Media")').click();

        //using UIAutomator .textStartsWith
        const audioFxBtn = await $('android=new UiSelector().textStartsWith("Video")');
        await expect(audioFxBtn).toBeDisplayed();
        await driver.closeApp()
    });

    it('Extracting and Asserting Multiple Elements', async () => {
        driver.launchApp()
        //expect below Array
        const expectedList = ['API Demos',"Access'ibility","Accessibility","Animation","App",
                            "Content","Graphics","Media","NFC","OS",
                            "Preference","Text","Views"]
        // $$ command is a short way to call the findElements command in order to fetch multiple elements
        // extracting multiple elements to an array
        const realList = await $$('android.widget.TextView');

        //const actualList=[]
        //get the text of each elements and store to actualList array
        // for (let element of realList) {
        //     actualList.push(await element.getText());
        //   }
        // await console.log(realList.length)
        // for (let i=0; i < realList.length; i++){
        //     let text = await realList[i].getText();
        //     actualList.push(text);
        // }

        // await console.log(actualList)

        //assert actualList text array is the same expected
        //0pp;.0-
        //o0.p?[await expect(realList.length).toEqual(expectedList.length)
    });
});