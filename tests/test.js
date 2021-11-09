import {Selector} from 'testcafe';

const userName = Selector("#username")
const password = Selector("#password")
const responseMessage = Selector('#responseMessage')
const passwordWrapper = Selector("#password-wrapper")
fixture("First Fixture")
.page("https://www.evernote.com/Login.action");



// Login with wrong email and correct error message is displayed
test("Login with wrong email",async t =>{
    await t
    
    .typeText(userName,"zizellaziz@hotmail.com")
    .click("#loginButton")
    .expect(responseMessage.innerText).eql('There is no account for the username or email you entered.')
    
    
});

//Login with wrong password and correct error message is displayed

test('Login with wrong password',async t =>{
    await t
    
    .typeText(userName,"zizo99909@gmail.com")
    .click("#loginButton")
    .expect(responseMessage.innerText).eql('')
    .typeText(password,"testtest")
    .click("#loginButton")
    .expect(passwordWrapper.innerText).contains('Incorrect password.')
    
    
})
//Login with correct credentials
test("Login with correct credentials",async t =>{
    await t
    
    .typeText(userName,"zizo99909@gmail.com")
    .click("#loginButton")
    .expect(responseMessage.innerText).eql('')
    .typeText(password,"zizozizo99")
    .click("#loginButton")
    if(passwordWrapper.innerText){
        return Error('password incorrect')
    }
    
    
});
