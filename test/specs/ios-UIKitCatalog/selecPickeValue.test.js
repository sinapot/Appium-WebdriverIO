//using XCUITEST Mobile Gestures

describe("using Mobile Gestures to scroll",async()=>{

    it('Scroll specified element', async()=>{
        //scroll an element
        await (await $('~Picker View')).click();
        const redelement = await $('~Red color component value')

        await driver.execute('mobile: selectPickerWheelValue',
            {
                elementId: redelement.elementId,
                order:"next",
                offset: 0.15
            });

        const blueelement = await $('~Blue color component value')
        await driver.execute('mobile: selectPickerWheelValue',
        {
            elementId: blueelement.elementId,
            order:"next",
            offset: 0.15
        });

    })
})