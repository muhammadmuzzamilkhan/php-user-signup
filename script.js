function validateForm(){
    var nameRegex = /^[A-Za-z\s]+$/;
    var emailRegex = /^\S+@\S+\.\S+$/;
    var passwordRegex = /^.{6,20}$/;

    var name = document.forms['signUpForm']['InputName'].value;
    var email = document.forms['signUpForm']['InputEmail'].value;
    var password = document.forms['signUpForm']['InputPassword'].value;
    var confirmPassword = document.forms['signUpForm']['confirmPassword'].value;

    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
    var confirmPasswordError = document.getElementById('confirmPasswordError');

    let isValid = true;

    if(name === "" || !name.match(nameRegex)){
        nameError.style.display = "block"
        isValid = false;
    } else{ nameError.style.display = "none" }
    if(email === "" || !email.match(emailRegex)){
        emailError.style.display = "block"
        isValid = false;
    } else{ emailError.style.display = "none" }
    if(password === "" || !password.match(passwordRegex)){
        passwordError.style.display = "block"
        isValid = false;
    } else{ passwordError.style.display = "none" }
    if(confirmPassword === "" || confirmPassword !== password){
        confirmPasswordError.style.display = "block"
        isValid = false;
    } else{ confirmPasswordError.style.display = "none" }
    return isValid;
}