const addPasswordsCheck = () => {
    password = document.querySelector("#password");
    passwordConfirm = document.querySelector("#confirm-password");
    passwordMessage = document.querySelector("#password-message");
    password.addEventListener("blur", checkPassword.bind(this, password, passwordConfirm, passwordMessage));
    password.addEventListener("keyup", checkPassword.bind(this, password, passwordConfirm, passwordMessage));
    passwordConfirm.addEventListener("blur", checkPasswordConfirm.bind(this, password, passwordConfirm, passwordMessage));
    passwordConfirm.addEventListener("keyup", checkPasswordConfirm.bind(this, password, passwordConfirm, passwordMessage));
}

const checkPassword = (password, passwordConfirm, passwordMessage) => {
    if (passwordConfirm.value === "" && password.value === "") {
        resetMessages(password, passwordConfirm, passwordMessage);
    } else if (passwordConfirm.value !== password.value && passwordConfirm.value !== "") {
        addErrorMessages(password, passwordConfirm, passwordMessage);
    } else if (passwordConfirm.value === password.value) {
        addConfirmationMessages(password, passwordConfirm, passwordMessage);
    }
}

const checkPasswordConfirm = (password, passwordConfirm, passwordMessage) => {
    if (passwordConfirm.value === "" && password.value === "") {
        resetMessages(password, passwordConfirm, passwordMessage);
    } else if (passwordConfirm.value !== password.value) {
        addErrorMessages(password, passwordConfirm, passwordMessage);
    } else if (passwordConfirm.value === password.value) {
        addConfirmationMessages(password, passwordConfirm, passwordMessage);
    }
}

const addErrorMessages = (password, passwordConfirm, passwordMessage) => {
    password.classList.add("password-error");
    passwordConfirm.classList.add("password-error")
    password.classList.remove("password-match");
    passwordConfirm.classList.remove("password-match")
    passwordMessage.textContent = "* Passwords do not match!";
    passwordMessage.style.color = "Red";
    passwordMessage.style.visibility = "visible";
}

const addConfirmationMessages = (password, passwordConfirm, passwordMessage) => {
    password.classList.add("password-match");
    passwordConfirm.classList.add("password-match")
    password.classList.remove("password-error");
    passwordConfirm.classList.remove("password-error")
    passwordMessage.textContent = "\u2713 Passwords match!";
    passwordMessage.style.color = "Green";
    passwordMessage.style.visibility = "visible";
    submitMessage = document.querySelector("#button-message");
    submitMessage.style.visibility = "hidden";
}

const resetMessages = (password, passwordConfirm, passwordMessage) => {
    password.classList.remove("password-match");
    passwordConfirm.classList.remove("password-match")
    password.classList.remove("password-error");
    passwordConfirm.classList.remove("password-error")
    passwordMessage.style.visibility = "hidden";
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