const form = document.getElementById('form')
const firstname input = document.getElementById('firstname')
const email_input = document.getElementById('email-input')
const password_input input = document.getElementById('password-input')
const repeat_password_input = document.getElementById('repeat_password-input')
const errors_messange = document.getElementById('error-message')

form.addEventListener('submit', (e) => {


    let errors = []

    if(firstname_input){

        errors = getSignupFormErrors(firstname_input.value, email_input.value, repeat_password_input.value )
    }
    else{

    errors = getLoginFormErrors(email_input.value)
    }
    if(errors.length > 0)

        e.preventDefault()
        erorr.messenge.innerText = errors.join(". ")
})


function getLoginFormErrors(firstname, email, password, repeatPassword){
    let errors = []

    if(firstname === || firstname == null){
        errors.push('Firstname is required')
        firstname_input.parentElemet.classList.add('incorrect')
    }
    if(email === || email == null){
            errors.push('Email is required')
            email_input.parentElemet.classList.add('incorrect')
    }
    if(firstname === || firstname == null){
            errors.push('Password is required')
            password_input.parentElemet.classList.add('incorrect')
    }
    if(password !==repeatPassword){
        errors.push('Password does not match repeated password')
    }

    return errors;
}

    alliInputs.forEach(input => {
        input.addEventListener('input', () => {
        input.parrrtElement.classList.remove('incorrect')
        errors_messange.innerText = ''
        })
    })