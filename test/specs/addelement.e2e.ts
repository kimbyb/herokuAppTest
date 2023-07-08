import AddElementPage from '../pageobjects/addelement.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('Adding elements', () => {
    it('should click add element and detele them', async () => {
        await AddElementPage.open()

        await AddElementPage.clickAdd();
       await AddElementPage.clickDelete()
       
        await browser.pause(5000)
    })
})


