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

    public get parentButton () {
        return $('#elements')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async clickAdd () {
       for (let i = 0; i < Math.floor(Math.random() * 6) + 1; i++) {
            await this.addButton.click()
       }
    }

    public async clickDelete() {
        const children = document.querySelectorAll("#elements > button");

        children.forEach((button) => {
            const btn = button as HTMLButtonElement;
            btn.click()       
        });
    }
 

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('add_remove_elements/');
    }
}

export default new AddElementPage();
