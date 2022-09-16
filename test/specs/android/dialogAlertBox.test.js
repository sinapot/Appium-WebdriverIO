//working with Dialog and Alert Box

describe("Working with Dialog Boxes and Alerts", async()=>{
    
    it("Accept Alert Dialog Box",async()=>{
        await driver.startActivity("io.appium.android.apis",".app.AlertDialogSamples");
        await $('~OK Cancel dialog with a message').click();

        //assert that alert box is visible
        await expect($('//*[@resource-id="android:id/alertTitle"]')).toBeDisplayed();

        //accept alert
        await driver.acceptAlert();

        //assert that alert box is not visible
        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toBeDisplayed();
        driver.closeApp()

    })

    it("Dismiss Alert Dialog Box",async()=>{
        await driver.startActivity("io.appium.android.apis",".app.AlertDialogSamples");
        await $('~OK Cancel dialog with a message').click();

        //assert that alert box is visible
        await expect($('//*[@resource-id="android:id/alertTitle"]')).toBeDisplayed();

        //dismiss alert
        await driver.dismissAlert();

        //assert that alert box is not visible
        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toBeDisplayed();
        driver.closeApp()

    })

    it.only("Dismiss Alert Dialog Box",async()=>{
        await driver.startActivity("io.appium.android.apis",".app.AlertDialogSamples");
        await $('~OK Cancel dialog with a message').click();

        //assert that alert box is visible
        await expect($('//*[@resource-id="android:id/alertTitle"]')).toBeDisplayed();

        //dismiss alert
        await $('//*[@text="OK"]').click();

        //assert that alert box is not visible
        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toBeDisplayed();
        driver.closeApp()

    })
})

