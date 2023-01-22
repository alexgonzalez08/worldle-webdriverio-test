import mainPage from '../pageobjects/main.page.js'

describe('Wordle Game Application', () => {
    it('should display error message modal', async () => {
        const words = ['quera', 'pollo', 'arrow', 'sushi', 'words', 'tests']
        await mainPage.open()
        await expect(mainPage.wordleBoard).toExist()
        await words.forEach(word => {
            mainPage.insertWord(word)
            mainPage.hitEnter()
        })
        await expect(mainPage.headingModal).toHaveText('Sorry, you loose!')
    })

    it('should display succesful message modal', async () => {
        const word = 'drink'
        var parameter = `?test=${word}`
        await mainPage.open(parameter)
        await expect(mainPage.wordleBoard).toExist()
        await mainPage.insertWord(word)
        await mainPage.hitEnter()
        await expect(MainPage.headingModal).toHaveText('You Win!')
    })
})


