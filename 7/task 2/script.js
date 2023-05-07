var Check = document.getElementById("rememberMe")
var nameInput = document.getElementById("userName")
var passInput = document.getElementById("password");


if (localStorage.checkbox && localStorage.checkbox !== "") {
    Check.setAttribute("checked", "checked");
    nameInput.value = localStorage.username;
    passInput.value = localStorage.password;
} else {
    Check.removeAttribute("checked");
    nameInput.value = "";
    passInput.value = "";
}

function lsRememberMe() {
    if (Check.checked && nameInput.value !== "" && passInput.value !== "") {
        localStorage.username = nameInput.value;
        localStorage.password = passInput.value;
        localStorage.checkbox = Check.value;
    } else {
        localStorage.username = "";
        localStorage.password = "";
        localStorage.checkbox = "";
    }
}