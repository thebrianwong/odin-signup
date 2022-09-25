// Checks and updates both when you click off and as you type.
const addPasswordsCheck = () => {
    const password = document.querySelector("#password");
    const passwordConfirm = document.querySelector("#confirm-password");
    const passwordMessage = document.querySelector("#password-message");
    password.addEventListener("blur", checkPassword.bind(this, password, passwordConfirm, passwordMessage));
    password.addEventListener("keyup", checkPassword.bind(this, password, passwordConfirm, passwordMessage));
    passwordConfirm.addEventListener("blur", checkPasswordConfirm.bind(this, password, passwordConfirm, passwordMessage));
    passwordConfirm.addEventListener("keyup", checkPasswordConfirm.bind(this, password, passwordConfirm, passwordMessage));
}

/* The only purpose of having 2 versions of these checks is so that you aren't notified of passwords not matching
when you haven't even started typing into the Confirm Password field yet. */
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
    const submitMessage = document.querySelector("#button-message");
    submitMessage.style.visibility = "hidden";
}

// Removes all messages and indications if you delete all entered password values.
const resetMessages = (password, passwordConfirm, passwordMessage) => {
    password.classList.remove("password-match");
    passwordConfirm.classList.remove("password-match")
    password.classList.remove("password-error");
    passwordConfirm.classList.remove("password-error")
    passwordMessage.style.visibility = "hidden";
}

// Displays an error message and prevents submission if you try to submit when passwords do not match.
const addSubmitCheck = () => {
    const submitButton = document.querySelector("button");
    const submitMessage = document.querySelector("#button-message");
    const password = document.querySelector("#password");
    const passwordConfirm = document.querySelector("#confirm-password");
    submitButton.addEventListener("click", (event) => {
        if (passwordConfirm.value !== password.value) {
            submitMessage.style.visibility = "visible";
            event.preventDefault();
        }
    })
}

addPasswordsCheck();
addSubmitCheck();