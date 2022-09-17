//using iOS XCUITEST Mobile Gestures

describe("Drag and Drop using WebdriverIO app", async()=>{


    it("drag and drop the puzzle", async ()=>{
        
        await (await $('~Sliders')).click();
        await (await $('(//XCUIElementTypeSlider)[1]')).addValue(0);
        await (await $('(//XCUIElementTypeSlider)[1]')).addValue(1);

       const value = await (await $('(//XCUIElementTypeSlider)[1]'));
       const finalValue = await value.getAttribute("value")

       console.log("final value is"+finalValue);

       await expect(finalValue).toEqual("100%");

    })

})

