let menubars = document.querySelector("#menu-bars");
let mynavbar = document.querySelector(".navbar");

let userlogin = document.querySelector("#menu-user");
let loginform = document.querySelector(".user-login");

menubars.onclick = () =>{
    menubars.classList.toggle('fa-times')
    mynavbar.classList.toggle('active')
}

userlogin.onclick = () =>{
    loginform.classList.toggle('active')
}



const navbar = document.querySelector('.header');
window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }
};