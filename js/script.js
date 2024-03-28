const menuIcon = document.querySelector("#menu-icon");
const menu = document.querySelector("#menu");


let click = 0;
menuIcon.addEventListener("click", () => {
    if(click === 0){
        menu.style.top = "0";
        menuIcon.innerHTML = "Close"
        click = 1;
    }else{
        menu.style.top = "-100%";
        menuIcon.innerHTML = "Menu"
        click = 0;
    }
})

