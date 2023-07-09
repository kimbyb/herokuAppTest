import AddElementPage from '../pageobjects/addelement.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('Adding elements', () => {
    let elementAdded: boolean;
    it('add element is present and should click add element', async () => {
        await AddElementPage.open();

        await expect(AddElementPage.addButton).toBeExisting()

        await AddElementPage.clickAdd();
        await expect(AddElementPage.deleteButton).toBeExisting();
        elementAdded = true;

    });

    it('should delete elements', async () => {
        if (!elementAdded) {
            // If no element was added in the previous test, you can skip this test or perform additional actions.
            return;
        }
        await AddElementPage.clickDelete();
        await expect(AddElementPage.deleteButton).not.toBeExisting();
        await browser.pause(5000)
    });
});