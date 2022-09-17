//using XCUITEST Mobile Gestures

describe("using Mobile Gestures to scroll",async()=>{

    it('Swipe specified element', async()=>{
        //scroll an element
        //found a bug, down is not working
        await (await $('~Picker View')).click();

        const redelement = await $('~Red color component value')
        await driver.execute('mobile: swipe',
            {
                elementId: redelement.elementId,
                direction:"up",
                velocity: 100
            });

        const blueelement = await $('~Blue color component value')
        await driver.execute('mobile: swipe',
        {
            elementId: blueelement.elementId,
            direction:"up",
            velocity: 100
        });

    })
})