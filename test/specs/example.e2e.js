import MainPage from '../pageobjects/main.page.js'

describe('Wordle Game Application', () => {
    it('should display error message modal after', async () => {
        await MainPage.open()
        await expect(MainPage.wordleBoard).toExist()
        await MainPage.insertWord('holas')
        await browser.pause(3000)
        await MainPage.hitEnter()
        
        await MainPage.insertWord('arroz')
        await browser.pause(3000)
        await MainPage.hitEnter()

    })
})


