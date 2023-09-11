let send = document.getElementById('send');
let form = document.getElementById('loginForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
});
send.addEventListener('click', (e) => {
    let name = document.getElementById('username');
    let password = document.getElementById('password');
    name = name.value;
    localStorage.setItem('username', name);
    password = password.value;
    localStorage.setItem('password', password)
    console.log(localStorage.getItem('username'));
    console.log(localStorage.getItem('password'));
});