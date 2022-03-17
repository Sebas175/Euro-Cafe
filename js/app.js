'user strict'

const menu = document.querySelector(".navbar");

window.onscroll = () => {

    if(window.scrollY <= 200){
            menu.style.backgroundColor = "rgba(0,0,0,0.2)";
    }else{
        menu.style.backgroundColor = "rgb(0,0,0)";
    }

}
