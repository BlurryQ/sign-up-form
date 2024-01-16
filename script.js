let passwordValue = "";
let confirmedPasswordValue = "";

const bottomRow = document.getElementById("bottom-row");
const div = document.createElement("div");
div.classList.add("error-font")
div.textContent = "Passwords do not match."

const themeToggle = document.getElementById("theme-toggle");
themeToggle.style.cssText = "background: url(images/moon.svg)"

const root = document.documentElement;
root.className = "light";

themeToggle.addEventListener("click", () => {
    console.log("woof")
    themeToggle.style.cssText = "";
    toggleTheme();
    })


const createAccount = document.getElementById("submit");
createAccount.setAttribute("disabled","true");

const password = document.getElementById("password");
password.addEventListener("change", () => {
    passwordValue = password.value
    let passwordMatch = checkPasswordsMatch(passwordValue, confirmedPasswordValue);
    if(passwordMatch) {
        createAccount.removeAttribute("disabled");
        bottomRow.removeChild(div);
    } else {
        createAccount.setAttribute("disabled","true");
        bottomRow.appendChild(div);
    }
})

const confirmPassword = document.getElementById("confirm-password");
confirmPassword.addEventListener("change", () => {
    confirmedPasswordValue = confirmPassword.value
    let passwordMatch = checkPasswordsMatch(passwordValue, confirmedPasswordValue);
    if(passwordMatch) {
        createAccount.removeAttribute("disabled");
        bottomRow.removeChild(div);
    } else {
        createAccount.setAttribute("disabled","true");
        bottomRow.appendChild(div);
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