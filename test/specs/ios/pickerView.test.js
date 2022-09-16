//using XCUITEST Mobile Gestures

describe("using Mobile Gestures to scroll",async()=>{
    it.skip('Scroll Down and Up',async()=>{
        //easiest, scroll the page
        await driver.execute('mobile: scroll',{direction:"down"});
        await driver.execute('mobile: scroll',{direction:"up"});
    })

    it('Set specified Value', async()=>{
        //scroll an element
        await (await $('~Picker View')).click();
        const redelement = await $('~Red color component value')
        const blueelement = await $('~Blue color component value')
        const greenelement = await $('~Green color component value')

        //set Purpple Color (125, 0, 125)

        await redelement.addValue(125);
        await greenelement.addValue(0);
        await blueelement.addValue(125);

    })
})