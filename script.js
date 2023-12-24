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
    string = password.value
    console.log(string);
    })

const confirmPassword = document.getElementById("confirm-password");
confirmPassword.addEventListener("change", () => {
    string = confirmPassword.value
    console.log(string);
    })

const createAccount = document.getElementById("submit")
createAccount.addEventListener("click", () => {
    console.log("HERE")
    if(password === confirmPassword) {
        console.log("match")
    } else {
        console.log("invalid")
    }
})

function toggleTheme() {
    const newTheme = root.className === "dark" ? "light" : "dark";
    root.className = newTheme;
}