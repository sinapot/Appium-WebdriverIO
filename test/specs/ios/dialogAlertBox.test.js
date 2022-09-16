//iOS Mobile Gesture

describe("dealing with Alerts",async()=>{
    it("accept Alert",async()=>{
        await $('~Alert Views').click();
        await $('~Simple').click();
        const text = '**/XCUIElementTypeStaticText[`label == "A Short Title Is Best"`]'
        const alert = await $(`-ios class chain:${text}`);
        await expect(alert).toHaveText('A Short Title Is Best');
        await (await $('~OK')).click();

        await expect(alert).not.toExist();
        
    })

    it("dismiss Alert",async()=>{
        await $('~Alert Views').click();
        await $('~Simple').click();
        const text = '**/XCUIElementTypeStaticText[`label == "A Short Title Is Best"`]'
        const alert = await $(`-ios class chain:${text}`);
        await expect(alert).toHaveText('A Short Title Is Best');
        
        await driver.acceptAlert();

        await expect(alert).not.toExist();
        
    })
})