document.addEventListener("DOMContentLoaded", () => {




    //access form 
    const form = document.querySelector("form")


    //accessing all element with id name
    const usernameField = document.getElementById("username")
    const passwordField = document.getElementById("password")
    const confirmpasswordField = document.getElementById("passwordconfirm")
    const mobileNumberField = document.getElementById("numbermobile")
    const emailField = document.getElementById("emailid")
    const termsCheckbox = document.getElementById("terms")
    const finalMsg = document.getElementById("finalMsg") //last result




    //accessing all span error for display error in every field
    const usernameError = document.getElementById("usernameid")
    const passwordError = document.getElementById("passwords")
    const confirmPasswordError = document.getElementById("confirmpassword")
    const mobileNumberError = document.getElementById("mobilenumber")
    const emailError = document.getElementById("emailids")
    const termsError = document.getElementById("term")



    //function when submit the form
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        //form true when starting time.when loose become false
        let isValid = true

        // erasing error msg
          usernameError.textContent = ""
        passwordError.textContent = ""
        confirmPasswordError.textContent = ""
        mobileNumberError.textContent = ""
        emailError.textContent = ""
        termsError.textContent = ""
      


        //checking username
        const usernameValue = usernameField.value.trim()
        if (usernameValue === "") {
            usernameError.textContent = "Please enter a name"

            isValid = false
        } else if (usernameValue.length < 3) {
            usernameError.textContent = "The name at least 3 character"

            isValid = false
        }


        //password checking

        const passwordValue = passwordField.value.trim()
        const minLenght = 8
        //checking is any number in your password(regex)
        const passwordNumber = /\d/.test(passwordValue)


        if (passwordValue === "") {
            passwordError.textContent = "Please enter password "

            isValid = false
        } else if (passwordValue.length < minLenght) {
            passwordError.textContent = `Password must be ${minLenght} characters`

            isValid = false
        } else if (!passwordNumber) {
            passwordError.textContent = `Your Password should contain at least one number`

            isValid = false
        }

        //confirm password testing

        const confirmPasswordValue = confirmpasswordField.value.trim()
        if (confirmPasswordValue === "") {
            confirmPasswordError.textContent = `Enter you password once more`

            isValid = false

        } else if (confirmPasswordValue !== passwordValue) {
            confirmPasswordError.textContent = `Not matching to your password`
             isValid = false
        }

        //mobile number checking
        const mobileNumberValue = mobileNumberField.value.trim()
        const mobileRegex = /^[0-9]{10}$/

        if (mobileNumberValue === "") {
            mobileNumberError.textContent = "Enter your mobile number "

            isValid = false
        } else if (!mobileRegex.test(mobileNumberValue)) {
            mobileNumberError.textContent = "Please enter correct 10 digit mobile number "

            isValid = false

        }

        //checking email
        const emailValue = emailField.value.trim()
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i



        if (emailValue === "") {
            emailError.textContent = "Enter your E-mail"

            isValid = false

        } else if (!emailRegex.test(emailValue)) {
            emailError.textContent = `please give correct E-mail`

            isValid = false
        }

        //checking terms
        if (!termsCheckbox.checked) {
            termsError.textContent = `You want to agree the terms and conditions`

            isValid = false
        }


        if (isValid) {


            finalMsg.textContent = "Form submitted successfully"
        }

       





    })

})