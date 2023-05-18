let form = document.querySelector("#form");
let name1 = document.querySelector("#name");
let pass = (document.querySelector("#pass"));
let confirm1 = document.querySelector("#cnf");
let submit = document.querySelector("#btn");
let error = document.querySelector("#result");

console.log(JSON.parse(localStorage.getItem('username')));

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (!/^[a-zA-Z]+$/.test(name1.value)) {
        error.style.display = "block";
        error.textContent = "Please fill first input in text";
    } else if (!/^[a-zA-Z]{4}\d{4}$/.test(pass.value)) {
        error.style.display = "block";
        error.textContent = "Please enter your 1st 4 letters then 2nd 4 Numbers password";
    } else if (!/^[a-zA-Z]{4}\d{4}$/.test(confirm1.value)) {
        error.style.display = "block";
        error.textContent = "Please check your Confirm password";
    } else if (!(pass.value === confirm1.value)) {
        error.style.display = "block";
        error.textContent = "Please check your password";
    } else {
        error.style.display = "none";
        location.href = "New folder/success.html"
    }
});