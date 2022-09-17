//using iOS XCUITEST Mobile Gestures

describe("drag and Drop to solve the PUZZLE", async()=>{

    it("Left hand", async ()=>{
        
        await (await $('~Drag')).click();
        //get locations
        const sourceElement1 = await $('//XCUIElementTypeOther[@name="drag-l2"]/XCUIElementTypeOther/XCUIElementTypeImage');
        const sourceLoc1 = await sourceElement1.getLocation();
        console.log(sourceLoc1);

        const targetElement1 = await $('//XCUIElementTypeOther[@name="drop-l2"]/XCUIElementTypeOther');
        const targetLoc1 = await targetElement1.getLocation();
        console.log(targetLoc1);

        await driver.execute("mobile: dragFromToForDuration",
            {
                duration: 1,
                fromX: sourceLoc1.x,
                fromY: sourceLoc1.y,
                toX: targetLoc1.x,
                toY: targetLoc1.y
            })

    })

    it("Head", async ()=>{
        
        await (await $('~Drag')).click();
        //get locations
        const sourceElement = await $('//XCUIElementTypeOther[@name="drag-c1"]/XCUIElementTypeOther/XCUIElementTypeImage');
        const sourceLoc = await sourceElement.getLocation();
        console.log(sourceLoc);

        const targetElement = await $('//XCUIElementTypeOther[@name="drop-c1"]/XCUIElementTypeOther');
        const targetLoc = await targetElement.getLocation();
        console.log(targetLoc);

        await driver.execute("mobile: dragFromToForDuration",
            {
                duration: 1,
                fromX: sourceLoc.x,
                fromY: sourceLoc.y,
                toX: targetLoc.x,
                toY: targetLoc.y
            })
    })

    it("Bottom", async ()=>{
        
        await (await $('~Drag')).click();
        //get locations
        const sourceElement = await $('//XCUIElementTypeOther[@name="drag-c3"]/XCUIElementTypeOther/XCUIElementTypeImage');
        const sourceLoc = await sourceElement.getLocation();
        console.log(sourceLoc);

        const targetElement = await $('//XCUIElementTypeOther[@name="drop-c3"]/XCUIElementTypeOther');
        const targetLoc = await targetElement.getLocation();
        console.log(targetLoc);

        await driver.execute("mobile: dragFromToForDuration",
            {
                duration: 1,
                fromX: sourceLoc.x,
                fromY: sourceLoc.y,
                toX: targetLoc.x,
                toY: targetLoc.y
            })
    })

    it("Body", async ()=>{
        
        await (await $('~Drag')).click();
        //get locations
        const sourceElement = await $('//XCUIElementTypeOther[@name="drag-c2"]/XCUIElementTypeOther/XCUIElementTypeImage');
        const sourceLoc = await sourceElement.getLocation();
        console.log(sourceLoc);

        const targetElement = await $('//XCUIElementTypeOther[@name="drop-c2"]/XCUIElementTypeOther');
        const targetLoc = await targetElement.getLocation();
        console.log(targetLoc);

        await driver.execute("mobile: dragFromToForDuration",
            {
                duration: 1,
                fromX: sourceLoc.x,
                fromY: sourceLoc.y,
                toX: targetLoc.x,
                toY: targetLoc.y
            })
    })

    it("Right Ear", async ()=>{
        
        await (await $('~Drag')).click();
        //get locations
        const sourceElement = await $('//XCUIElementTypeOther[@name="drag-r1"]/XCUIElementTypeOther/XCUIElementTypeImage');
        const sourceLoc = await sourceElement.getLocation();
        console.log(sourceLoc);

        const targetElement = await $('//XCUIElementTypeOther[@name="drop-r1"]/XCUIElementTypeOther');
        const targetLoc = await targetElement.getLocation();
        console.log(targetLoc);

        await driver.execute("mobile: dragFromToForDuration",
            {
                duration: 1,
                fromX: sourceLoc.x,
                fromY: sourceLoc.y,
                toX: targetLoc.x,
                toY: targetLoc.y
            })
    })


    it("Left Ear", async ()=>{
        
        await (await $('~Drag')).click();
        //get locations
        const sourceElement = await $('//XCUIElementTypeOther[@name="drag-l1"]/XCUIElementTypeOther/XCUIElementTypeImage');
        const sourceLoc = await sourceElement.getLocation();
        console.log(sourceLoc);

        const targetElement = await $('//XCUIElementTypeOther[@name="drop-l1"]/XCUIElementTypeOther');
        const targetLoc = await targetElement.getLocation();
        console.log(targetLoc);

        await driver.execute("mobile: dragFromToForDuration",
            {
                duration: 1,
                fromX: sourceLoc.x,
                fromY: sourceLoc.y,
                toX: targetLoc.x,
                toY: targetLoc.y
            })
    })

    it("Left Foot", async ()=>{
        
        await (await $('~Drag')).click();
        //get locations
        const sourceElement = await $('//XCUIElementTypeOther[@name="drag-l3"]/XCUIElementTypeOther/XCUIElementTypeImage');
        const sourceLoc = await sourceElement.getLocation();
        console.log(sourceLoc);

        const targetElement = await $('//XCUIElementTypeOther[@name="drop-l3"]/XCUIElementTypeOther');
        const targetLoc = await targetElement.getLocation();
        console.log(targetLoc);

        await driver.execute("mobile: dragFromToForDuration",
            {
                duration: 1,
                fromX: sourceLoc.x,
                fromY: sourceLoc.y,
                toX: targetLoc.x,
                toY: targetLoc.y
            })
    })

    it("Right Foot", async ()=>{
        
        await (await $('~Drag')).click();
        //get locations
        const sourceElement = await $('//XCUIElementTypeOther[@name="drag-r3"]/XCUIElementTypeOther/XCUIElementTypeImage');
        const sourceLoc = await sourceElement.getLocation();
        console.log(sourceLoc);

        const targetElement = await $('//XCUIElementTypeOther[@name="drop-r3"]/XCUIElementTypeOther');
        const targetLoc = await targetElement.getLocation();
        console.log(targetLoc);

        await driver.execute("mobile: dragFromToForDuration",
            {
                duration: 2,
                fromX: sourceLoc.x,
                fromY: sourceLoc.y,
                toX: targetLoc.x,
                toY: targetLoc.y
            })
    })
    it("Right Hand", async ()=>{
        
        await (await $('~Drag')).click();
        //get locations
        const sourceElement = await $('//XCUIElementTypeOther[@name="drag-r2"]/XCUIElementTypeOther/XCUIElementTypeImage');
        const sourceLoc = await sourceElement.getLocation();
        console.log(sourceLoc);

        const targetElement = await $('//XCUIElementTypeOther[@name="drop-r2"]/XCUIElementTypeOther');
        const targetLoc = await targetElement.getLocation();
        console.log(targetLoc);

        await driver.execute("mobile: dragFromToForDuration",
            {
                duration: 2,
                fromX: sourceLoc.x,
                fromY: sourceLoc.y,
                toX: targetLoc.x,
                toY: targetLoc.y
            })
    })
})

