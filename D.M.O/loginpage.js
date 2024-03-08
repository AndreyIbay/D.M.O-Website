/* Hide/Show Password */
const showpass = document.querySelector("#showpass");
const pass = document.querySelector("#password");

showpass.addEventListener("click", function() {
    this.classList.toggle("fa-eye");
    const type = pass.getAttribute("type") === "password" ? "text" : "password";
    pass.setAttribute("type", type);
})

function enter() {
const user = document.getElementById('user').value;
const password = document.getElementById('password').value;

    if (user === 'kertzkie' && password === 'kertz1234') {
        window.location.href="homepage.html";

    } else {
        window.alert("The Username or Password is invalid.");
    }
}