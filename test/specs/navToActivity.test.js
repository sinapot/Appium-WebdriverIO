//this shows how to navigate straight to pages/app activity
//https://webdriver.io/docs/api/appium/#startactivity

describe("Nav to straigh to App Activity", async()=>{
    
    it("Navigate straight to Photo Grid",async()=>{
        await driver.startActivity("io.appium.android.apis",".view.DateWidgets2")
        await expect($('//android.widget.TextView[@text="Views/Date Widgets/2. Inline"]')).toHaveTextContaining("Inline")
    })
    it("Navigate straight to Text entry dialog box",async()=>{
        await driver.startActivity("io.appium.android.apis",".app.AlertDialogSamples")
        await expect($('//android.widget.TextView[@text="App/Alert Dialogs"]')).toHaveTextContaining("Alert Dialogs")
    })

    it("Navigate straight to Photo Grid",async()=>{
        await driver.startActivity("io.appium.android.apis",".view.Grid2")
        await expect($('//android.widget.TextView[@text="Views/Grid/2. Photo Grid"]')).toHaveTextContaining("Photo Grid")
    })

})

