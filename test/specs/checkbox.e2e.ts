import CheckboxPage from '../pageobjects/checkboxes.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', () => {
    it('should check all the boxes', async () => {
        await CheckboxPage.open()

        await CheckboxPage.clickCheckbox
        await expect(CheckboxPage.checkbox1Checked).toBeExisting()
        await expect(CheckboxPage.checkbox2Checked).toBeExisting()
       
        browser.pause(500)
    })
})


