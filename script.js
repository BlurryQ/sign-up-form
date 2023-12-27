let passwordValue = "";
let confirmedPasswordValue = "";

const themeToggle = document.getElementById("theme-toggle");
themeToggle.style.cssText = "background: url(images/moon.svg)"

const root = document.documentElement;
root.className = "light";

themeToggle.addEventListener("click", () => {
    console.log("woof")
    themeToggle.style.cssText = "";
    toggleTheme();
    })

const password = document.getElementById("password");
password.addEventListener("change", () => {
    passwordValue = password.value
    })

const confirmPassword = document.getElementById("confirm-password");
confirmPassword.addEventListener("change", () => {
    confirmedPasswordValue = confirmPassword.value
    })

const createAccount = document.getElementById("submit")
createAccount.addEventListener("click", () => {
    console.log("Checking passwords match...")
    let passwordMatch = checkPasswordsMatch(passwordValue, confirmedPasswordValue);
    if(passwordMatch) {
        return true;
    } else {
        
    }
})

function toggleTheme() {
    const newTheme = root.className === "dark" ? "light" : "dark";
    root.className = newTheme;
}

function checkPasswordsMatch(inputOne, inputTwo) {
    if(inputOne === inputTwo) {
        console.log("Password match")
        return true;
    } else {
        console.log("Passwords do not match")
        return false;
    }

}