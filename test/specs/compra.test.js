import { driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'
import browsePage from '../pageobjects/browse.page.js'
import enderecoPage from '../pageobjects/endereco.page.js'

describe('Compra completa no app', () => {
    it('deve fazer uma compra completa', async () => {
        let profileTab = driver.isAndroid ? 'profile' : 'Account'
        await homePage.openMenu(profileTab)
        await loginPage.login('cliente@ebac.art.br', 'GD*peToHNJ1#c$sgk08EaYJQ')
        await homePage.search()
        await browsePage.searchInput.setValue('In')
        await (await browsePage.products).at(0).click()
        await enderecoPage.addToCart()
        await enderecoPage.continueToPayment()
        await enderecoPage.completeCheckout()
    })
})

