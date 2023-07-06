import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckboxPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get checkbox1 () {
        return $('#checkboxes > input[type=checkbox]:nth-child(1)');
    }

    public get checkbox2 () {
        return $('#checkboxes > input[type=checkbox]:nth-child(3)');
    }

    public get checkbox1Checked () {
        return $("#checkboxes > input[type=checkbox]:nth-child(1)")
    }

    public get checkbox2Checked () {
        return $("#checkboxes > input[type=checkbox]:nth-child(3)")
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async clickCheckbox () {
        await this.checkbox1.click();
        await this.checkbox2.click();
    }

 

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('checkboxes');
    }
}

export default new CheckboxPage();
