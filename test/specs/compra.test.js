import { driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import browsePage from '../pageobjects/browse.page.js'
import enderecoPage from '../pageobjects/endereco.page.js'

describe('Compra no app', () => {
    it('deve adicionar produto no carrinho', async () => {
        let profileTab = driver.isAndroid ? 'profile' : 'Account'
        await homePage.openMenu(profileTab)
        await homePage.search()
        await browsePage.searchInput.setValue('In')
        await (await browsePage.products).at(0).click()
        await enderecoPage.addToCart()
    })
})

