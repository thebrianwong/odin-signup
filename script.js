const addPasswordsCheck = () => {
    password = document.querySelector("#password");
    passwordConfirm = document.querySelector("#confirm-password");
    password.addEventListener("blur", checkPasswords.bind(this, password, passwordConfirm));
    passwordConfirm.addEventListener("blur", checkPasswords.bind(this, password, passwordConfirm));
}

const checkPasswords = (password, passwordConfirm) => {
    if (passwordConfirm.value !== password.value && passwordConfirm.value !== "" && password.value !== "") {
        password.classList.add("password-error");
        passwordConfirm.classList.add("password-error")
    } else {
        password.classList.remove("password-error");
        passwordConfirm.classList.remove("password-error");
    }
}

addPasswordsCheck();