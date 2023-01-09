let scrollDown = document.getElementById("nav");

const scrollTop = () => {
    if(window.scrollY > 0) {
        scrollDown.classList.add("fixed");
    }else {
        scrollDown.classList.remove("fixed");
    }
}
window.addEventListener("scroll", scrollTop)