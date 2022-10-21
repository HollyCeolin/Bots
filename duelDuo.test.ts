
import { Builder, Capabilities, By } from "selenium-webdriver"
import { titleContains } from "selenium-webdriver/lib/until"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})
test('Draw button displays the "choices"', async() => {
        const draw = await driver.findElement(By.id("draw"))
        const choices = await driver.findElement(By.id("choices"))
        //const displayed = await draw.isDisplayed()
        expect(draw).toContain(choices)
    
        await driver.sleep(3000)

test('Add duo button displays player-duo', async() => {
    const duo = await driver.findElement(By.className("bot-btn"))
    const player = await driver.findElement(By.id("player-duo"))
    expect(duo).toContain(player)

    await driver.sleep(3000)
})     
    

})
// Check that clicking the Draw button displays the div with id = “choices”

// Check that clicking an “Add to Duo” button displays the div with id = “player-duo”

// Check that when a bot is “Removed from Duo”, that it goes back to “choices”

// Note: You may want to use the sleep function after clicking on an element to make sure the tests don’t get ahead of themselves.

// You can run these with npm run test as well.

