import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AddElementPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get addButton () {
        return $("#content > div > button");
    }

    public get deleteButton () {
       // return $('[onclick="deleteElement()"]');
       return $$('[data-testid="delete-button"]')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async clickAdd () {
        let random : number =  Math.floor(Math.random() * 6) + 1
        for (let i = 0; i < random; i++) {
            console.log(i)
            this.addButton.click()
            console.log("clicked")
       }
    }

    public async clickDelete() {
        const parentElement = await $("#elements");
      //  const children = await parentElement.$$('button')
      const children = await $$('//*[@id="elements"]/button')
        for (let i = 0; i < children.length ; i++) {
            console.log('length ' + children.length);
            await children[i].click();
            browser.pause(100)
        }       
    }
 

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('add_remove_elements/');
    }
}

export default new AddElementPage();
