//using XCUITEST Mobile Gestures

describe("using Mobile Gestures to scroll",async()=>{
    it.skip('Scroll Down and Up',async()=>{
        //easiest, scroll the page
        await driver.execute('mobile: scroll',{direction:"down"});
        await driver.execute('mobile: scroll',{direction:"up"});
    })

    it('Scroll specified element', async()=>{
        //scroll an element
        await (await $('~Picker View')).click();
        const redelement = await $('~Red color component value')

        await driver.execute('mobile: scroll',
            {
                elementId: redelement.elementId,
                direction:"down",
            });

        const blueelement = await $('~Blue color component value')
        await driver.execute('mobile: scroll',
        {
            elementId: blueelement.elementId,
            direction:"up",
        });

    })
})