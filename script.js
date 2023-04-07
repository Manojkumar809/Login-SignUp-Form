const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const logregBox = document.querySelector('.logreg-box');
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar')[0]
const searchForm = document.getElementsByClassName('search-form')[0]

registerLink.addEventListener('click', ()=>{
    logregBox.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    logregBox.classList.remove('active');
});

toggleButton.addEventListener('click', ()=>{
    navbarLinks.classList.toggle('active');
    searchForm.classList.toggle('active');
});