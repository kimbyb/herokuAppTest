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
       return $('button.added-manually[onclick="deleteElement()"]')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async clickAdd () {
       for (let i = 0; i < Math.floor(Math.random() * 6) + 1; i++) {
        console.log(i)
            this.addButton.click()
            console.log("clicked")
       }
    }

    public async clickDelete() {
        // const  finalButtonCount = await $('#elements').length;
        // console.log(finalButtonCount)
        // console.log('im here')
        // for (let i = 0; i <  finalButtonCount; i++) {
        //     this.deleteButton.click();
        //   }
        if ((await this.deleteButton).isExisting) {
            (await this.deleteButton).click
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
