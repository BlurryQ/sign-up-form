console.log("This will grant you access to Dobermann pics :D")

const theme = document.getElementById("theme");
theme.addEventListener("click", () => {
    console.log("woof")
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
    const root = document.documentElement;
    const newTheme = root.className === "dark" ? "light" : "dark";
    root.className = newTheme;
}