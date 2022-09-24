const addPasswordsCheck = () => {
    password = document.querySelector("#password");
    passwordConfirm = document.querySelector("#confirm-password");
    errorMessage = document.querySelector("#error-message");
    password.addEventListener("blur", checkPasswords.bind(this, password, passwordConfirm, errorMessage));
    passwordConfirm.addEventListener("blur", checkPasswords.bind(this, password, passwordConfirm, errorMessage));
}

const checkPasswords = (password, passwordConfirm, errorMessage) => {
    if (passwordConfirm.value !== password.value && passwordConfirm.value !== "" && password.value !== "") {
        password.classList.add("password-error");
        passwordConfirm.classList.add("password-error")
        errorMessage.style.visibility = "visible";
    } else {
        password.classList.remove("password-error");
        passwordConfirm.classList.remove("password-error");
        errorMessage.style.visibility = "hidden";
    }
}

const addSubmitCheck = () => {
    submitButton = document.querySelector("button");
    submitButton.addEventListener("click", () => {

    })
}

addPasswordsCheck();
addSubmitCheck();