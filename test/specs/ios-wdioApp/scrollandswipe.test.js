describe("Using scroll",()=>{

    it("Left and Right Scroll", async()=>{

        await (await $('~Swipe')).click();
  
        await driver.execute('mobile: scroll',
            {
                direction:"left",
            });    
        await driver.execute('mobile: scroll',
            {
                direction:"right",
            });

    })

    it("Left and Right Swipe", async()=>{


        await driver.execute('mobile: swipe',
            {
                direction:"left",
                velocity: 200
            });    
        
        await driver.execute('mobile: swipe',
            {
                direction:"right",
                velocity: 200
            });

    })

    it("Up and Down Scroll", async()=>{

        await driver.execute('mobile: scroll',
            {
                direction:"down",
            });    
        await driver.execute('mobile: scroll',
            {
                direction:"up",
            });
        
    })

})