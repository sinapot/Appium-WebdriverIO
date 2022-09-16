//Vertical and Horizaontal scrolling
//This test uses UI Automator2 commands for Mobile Gestures


describe("Showing vertical and horizontal scrollong", ()=>{
    it("Scrolling to End",async()=>{
        await driver.startActivity("io.appium.android.apis",".ApiDemos");
        await $('~App').click()
        await $('~Activity').click()

        //scroll to End using UI Scrollable from UI Selector
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,4)');

        //await $('~Secure Surfaces').scrollIntoView();
        await $('~Secure Surfaces').click();

    })


    it("Scrolling into View",async()=>{
        await driver.startActivity("io.appium.android.apis",".ApiDemos");
        await $('~App').click()
        await $('~Activity').click()

        //scroll to End using UI Scrollable from UI Selector
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")');

        //await $('~Secure Surfaces').scrollIntoView();
        await $('~Secure Surfaces').click();

        //assert
        await expect($('~Secure Window')).toBeDisplayed();
        
    })

    it("Horizontal scrolling",async()=>{
        await driver.startActivity("io.appium.android.apis",".view.Gallery1");

        //horizontal Scrolling
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward(3)');
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward(3)');

    })
})