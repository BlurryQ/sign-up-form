/* Toggle Theme */

const themeToggle = document.getElementById("theme-toggle");
themeToggle.style.cssText = "background: url(images/moon.svg)"

const root = document.documentElement;
root.className = "light";

themeToggle.addEventListener("click", () => {
    themeToggle.style.cssText = "";
    toggleTheme();
    })

function toggleTheme() {
    const newTheme = root.className === "dark" ? "light" : "dark";
    root.className = newTheme;
}

/* End Toggle Theme */

const firstName = document.getElementById("first-name");
firstName.addEventListener("change", () => {
    firstName.classList.add("valid");
})

const lastName = document.getElementById("last-name");
lastName.addEventListener("change", () => {
    lastName.classList.add("valid");
})

const phone = document.getElementById("phone");
phone.addEventListener("change", () => {
    phoneLength = phone.value.length
    if(phoneLength >= 9 && phoneLength <= 15) {
        phone.classList.remove("invalid");
        phone.classList.add("valid");
    } else {
        phone.classList.remove("valid");
        phone.classList.add("invalid");
    }
})

let passwordValue = "";
let confirmedPasswordValue = "";

const password = document.getElementById("password");
password.addEventListener("change", () => {
    passwordValue = password.value
    let passwordMatch = checkPasswordsMatch(passwordValue, confirmedPasswordValue);
    let passwordLength = confirmedPasswordValue.length;
    passwordError(passwordMatch, passwordLength)
})

const confirmPassword = document.getElementById("confirm-password");
confirmPassword.addEventListener("change", () => {
    confirmedPasswordValue = confirmPassword.value
    let passwordMatch = checkPasswordsMatch(passwordValue, confirmedPasswordValue);
    let confirmedPasswordLength = confirmedPasswordValue.length;
    passwordError(passwordMatch, confirmedPasswordLength)
})

const toggleShowPass = document.getElementById("toggle-pass");
toggleShowPass.addEventListener("click", () => {
    const displayStatus = toggleShowPass.className
    if(displayStatus === "show") {
        toggleShowPass.classList.remove("show");
        toggleShowPass.classList.add("hide");
        password.type = "text";
    } else {
        toggleShowPass.classList.remove("hide");
        toggleShowPass.classList.add("show");
        password.type = "password";
    }
})

const toggleShowConfirmPass = document.getElementById("toggle-confirm-pass");
toggleShowConfirmPass.addEventListener("click", () => {
    const displayStatus = toggleShowConfirmPass.className
    if(displayStatus === "show") {
        toggleShowConfirmPass.classList.remove("show");
        toggleShowConfirmPass.classList.add("hide");
        confirmPassword.type = "text";
    } else {
        toggleShowConfirmPass.classList.remove("hide");
        toggleShowConfirmPass.classList.add("show");
        confirmPassword.type = "password";
    }
})

function checkPasswordsMatch(inputOne, inputTwo) {
    if(inputOne === inputTwo) {
        return true;
    } else {
        return false;
    }
}

const bottomRow = document.getElementById("bottom-row");
const div = document.createElement("div");
div.classList.add("error-font")

const createAccount = document.getElementById("submit");
createAccount.setAttribute("disabled","true");

function passwordError(isMatching, passwordLength) {
    if(isMatching && (passwordLength >= 8 && passwordLength <= 14)) {
        createAccount.removeAttribute("disabled");
        bottomRow.removeChild(div);
        password.classList.remove("invalid");
        confirmPassword.classList.remove("invalid");
        password.classList.add("valid");
        confirmPassword.classList.add("valid")  ;
        return;
    } else if(isMatching && (passwordLength <= 8 || passwordLength >= 14)) {
        createAccount.setAttribute("disabled","true");
        div.textContent = "Passwords are too short."
        bottomRow.appendChild(div);
        password.classList.remove("valid");
        confirmPassword.classList.remove("valid");
        password.classList.add("invalid");
        confirmPassword.classList.add("invalid")  ;
        return;
    } else {
        createAccount.setAttribute("disabled","true");
        div.textContent = "Passwords do not match."
        bottomRow.appendChild(div);
        password.classList.remove("valid");
        confirmPassword.classList.remove("valid");
        password.classList.add("invalid");
        confirmPassword.classList.add("invalid")  ;
        return;
    }
}