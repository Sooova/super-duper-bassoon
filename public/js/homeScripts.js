const emailInput = document.getElementById("emailInput");
const loginDiv = document.getElementById("loginDiv");
const welcomeDiv = document.getElementById("welcomeDiv");
const signupDiv = document.getElementById("signupDiv");
const inputFields = document.getElementsByTagName("input");
const signupSubmit = document.getElementById("signupSubmit");
const userPasswordInputDiv = document.getElementById("userPasswordInputDiv");
const emailInputDiv = document.getElementById("emailInputDiv");
const signupInputsValid = {
    emailInput: false,
    sUsername: false,
    sPassword: false,
}

showLogin = function (loginDiv,welcomeDiv) {
    welcomeDiv.classList.add("hidden");
    loginDiv.classList.remove("hidden");
}

showSignup = function (signupDiv,welcomeDiv) {
    welcomeDiv.classList.add("hidden");
    signupDiv.classList.remove("hidden");
}

hideSignup = function (signupDiv,welcomeDiv) {
    signupDiv.classList.add("hidden");
    welcomeDiv.classList.remove("hidden");
    clearInputFields(inputFields);

}

hideLogin = function (loginDiv,welcomeDiv) {
    loginDiv.classList.add("hidden");
    welcomeDiv.classList.remove("hidden");
    clearInputFields(inputFields);
}

clearInputFields = function (inputFields) {
    for (var ii = 0; ii < inputFields.length; ii++) {
        if (inputFields[ii].type == "text") {
            inputFields[ii].value = "";
        }
    }
}

//Listen to signup and change colors of input boxes User and Password accordingly
userPasswordInputDiv.addEventListener('input', (e) => {
    updateValueSignupUserPassword(e,signupInputsValid);
});
function updateValueSignupUserPassword(e,signupInputsValid) {
    const inputTarget = e.target;
    const inputTargetId = e.target.id;
    if (inputTarget.value.length != 0 && e.target.value.length < 4) {
        inputTarget.classList.remove('is-error');
        e.target.classList.add('is-warning');
        signupInputsValid[inputTargetId] = false;
    }
    else if (e.target.value.length === 0) {
        e.target.classList.remove('is-warning');
        e.target.classList.add('is-error');
        signupInputsValid[inputTargetId] = false;
    }
    else if (e.target.value.length > 3) {
        e.target.classList.remove('is-warning');
        e.target.classList.add('is-success');
        signupInputsValid[inputTargetId] = true;
    }
    checkSignupInput(signupInputsValid,signupSubmit);
}



//listens to signup and change colors of input boxes for email
emailInputDiv.addEventListener('input', (e) => {
    updateValueEmail(e,signupInputsValid);
})
function updateValueEmail(e,signupInputsValid) {
    const inputTarget = e.target;
    const inputTargetId = e.target.id;
    
    if (inputTarget.value.length != 0 ) {
        inputTarget.classList.remove('is-error');
        e.target.classList.add('is-warning');
        signupInputsValid[inputTargetId] = false;
    }
}

//If contents of inputs in the signup page are valid, make the submit button clickable
checkSignupInput = function(signupInputsValid,signupSubmit) {
    if(signupInputsValid.emailInput === false && signupInputsValid.sUsername === true && signupInputsValid.sPassword === true) {
        signupSubmit.classList.remove("is-disabled");
        signupSubmit.classList.add("is-warning");
        console.log('this block is working');
    }
    else {
        signupSubmit.classList.remove('is-warning');
        signupSubmit.classList.add('is-disabled');
    }
    console.log('test');
}

//Listen to login and change colors of input boxes accordingly
loginDiv.addEventListener('input', updateValueLogin);
function updateValueLogin(e) {
    if (e.target.value.length != 0) {
        e.target.classList.remove('is-error');
        e.target.classList.add('is-warning');
    }
    else if (e.target.value.length === 0) {
        e.target.classList.remove('is-warning');
        e.target.classList.add('is-error');
    }
}

clearInputColors = function() {

    
}

greenEmailInput = function () {
    const emailInput = document.getElementById("emailInput");
    emailInput.classList.remove('is-error');
    emailInput.classList.remove('is-warning');
    emailInput.classList.add('is-success');
}

