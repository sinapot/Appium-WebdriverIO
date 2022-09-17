//using iOS XCUITEST Mobile Gestures

describe("using XCUITEST Mobile Gesture", async()=>{

    
    it("setting Slider value", async ()=>{
        
        await (await $('~Sliders')).click();
        await (await $('(//XCUIElementTypeSlider)[1]')).addValue(0);
        await (await $('(//XCUIElementTypeSlider)[1]')).addValue(1);

       const value = await (await $('(//XCUIElementTypeSlider)[1]'));
       const finalValue = await value.getAttribute("value")

       console.log("final value is"+finalValue);

       await expect(finalValue).toEqual("100%");

    })

})

