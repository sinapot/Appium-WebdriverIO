//performing scrolling and changing date

describe("Changing the date in the Calendar",()=>{
    it("changing the date",async()=>{
        await driver.startActivity("io.appium.android.apis",".view.DateWidgets1");
        //get current date
        const currentDate = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]').getText();
        await console.log(currentDate);
        //change date
        await $('~change the date').click();
        //horizontal to the right scroll
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward().scrollForward().scrollForward()');
        //pick date 10
        await $('//*[@content-desc="25 December 2022"]').click();
        //click OK
        await $('//*[@text="OK"]').click();
        //test that date is updated does not equal current date
        const selectedDate = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]').getText();
        await expect(selectedDate).not.toEqual(currentDate);
    })
})