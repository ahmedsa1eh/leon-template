const menuIcon = document.getElementById("menu-icon")
const navBar = document.getElementById("nav-bar")
const body = document.querySelector("body")
const doc = document.querySelector("html")


menuIcon.addEventListener("click" , ()=>{
    navBar.classList.toggle("active")
    
})

