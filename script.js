const addPasswordsCheck = () => {
    password = document.querySelector("#password");
    passwordConfirm = document.querySelector("#confirm-password");
    passwordMessage = document.querySelector("#password-message");
    password.addEventListener("blur", checkPasswords.bind(this, password, passwordConfirm, passwordMessage));
    passwordConfirm.addEventListener("blur", checkPasswords.bind(this, password, passwordConfirm, passwordMessage));
}

const checkPasswords = (password, passwordConfirm, passwordMessage) => {
    if (passwordConfirm.value !== password.value && passwordConfirm.value !== "" && password.value !== "") {
        password.classList.add("password-error");
        passwordConfirm.classList.add("password-error")
        passwordMessage.style.visibility = "visible";
    } else {
        password.classList.remove("password-error");
        passwordConfirm.classList.remove("password-error");
        passwordMessage.style.visibility = "hidden";
        submitMessage = document.querySelector("#button-message");
        submitMessage.style.visibility = "hidden";
    }
}

const addSubmitCheck = () => {
    submitButton = document.querySelector("button");
    submitMessage = document.querySelector("#button-message");
    password = document.querySelector("#password");
    passwordConfirm = document.querySelector("#confirm-password");
    submitButton.addEventListener("click", (event) => {
        if (passwordConfirm.value !== password.value) {
            submitMessage.style.visibility = "visible";
            event.preventDefault();
        }
    })
}

addPasswordsCheck();
addSubmitCheck();