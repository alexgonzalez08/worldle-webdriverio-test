import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
    /**
     * define selectors using getter methods
     */
    get wordleBoard () {
        const container = $$('div.row')
        return container
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    async insertWord(word) {
        var inputs = word.split('')
        await inputs.forEach(input => {
            browser.pause(2000)
            this.insertInput(input)
        });
    }

    async insertInput(input) {
        await browser.keys(input)
    }

    async hitEnter() {
        await browser.keys("\uE007")
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }

    openSettingNewWord(word) {
        return super.open(`?test=${word}`)
    }
}

export default new MainPage();
