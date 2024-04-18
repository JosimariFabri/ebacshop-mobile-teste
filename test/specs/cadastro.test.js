import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'
import cadastroPage from '../pageobjects/cadastro.page.js'

describe('Página de cadastro', () => {
    it('Deve fazer cadastro do usuário', async () => {
        await homePage.openMenu('profile')
        await loginPage.openSignup('Sign up')
        await cadastroPage.cadastro('EBAC', 'Cliente', '11 0000-0000', 'cliente@ebac.art.br', 'GD*peToHNJ1#c$sgk08EaYJQ', 'GD*peToHNJ1#c$sgk08EaYJQ' )
        expect((await profilePage.profileName('EBAC Cliente')).isDisplayed()).toBeTruthy()
    })
})

