import { $ } from '@wdio/globals'

class CadastroPage {
   get firstName (){
        return $('id:firstName')
   }
   get lastName (){
        return $('id:lastName')
   }
   get phoneNumber (){
        return $('id:phone')
   }

   get email (){
     return $('id:email')
   }

   get password (){
     return $('id:password')
   }

   get reenterPassword (){
     return $('id:repassword')
   }

   get create (){
     return $('//android.widget.TextView[@text="Create"]')
   }

   async cadastro(firstName, lastName, phoneNumber, email, password, reenterPassword){
        await this.firstName.setValue(firstName)
        await this.lastName.setValue(lastName)
        await this.phoneNumber.setValue(phoneNumber)
        await this.email.setValue(email)
        await this.password.setValue(password)
        await this.reenterPassword.setValue(reenterPassword)
        await this.create.click()
   }
}

export default new CadastroPage();
