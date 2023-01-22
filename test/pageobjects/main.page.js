import Page from './page.js';

class MainPage extends Page {

    get wordleBoard () {
        return $$('div[class="row"]')
    }

    get modalMessage() {
        return $('div[class="modal"]')
    }
    
    get headingModal() {
        return $('.modal h1')
    }

    async modalIsDisplayed() {
        await browser.waitUntil(async function () {
            this.headingModal.isDisplayed()
        }, {
            timeout: 5000,
            timeoutMsg: 'Modal was not displayed after 5s.'
        });
    }

    async insertWord(word) {
        var inputs = word.split('')
        await inputs.forEach((input) => {
            this.pauseBrowser()
            this.insertInput(input)
            this.pauseBrowser()
        });
    }

    async insertInput(input) {
        await browser.keys(input)
    }

    async hitEnter() {
        await browser.keys("\uE006")
        await this.pauseBrowser()
    }

    async open (parameters) {
        return await super.open(parameters);
    }

    async pauseBrowser() {
        await browser.pause(50000)
    }

}

export default new MainPage();
