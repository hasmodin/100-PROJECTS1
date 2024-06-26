

const container = document.querySelector(".page-container");
const allPages = document.querySelectorAll(".page");
const toggleBtn = document.querySelector(".toggle-btn");
const ul = document.querySelector(".nav-list");
const overlay = document.querySelector(".overlay");
const allLinks = document.querySelectorAll(".link");

let  pageIndex = 0;

toggleBtn.addEventListener("click", () => {

  
    toggleBtn.classList.toggle("active");
    container.classList.toggle("active");
    ul.classList.toggle("show");
});

allLinks.forEach((link, index) => {
    link.addEventListener("click", () => {
        nextPage(index)
    })
})

function nextPage(index) {
    overlay.style.animation = "slide 1s linear 1s";
    setTimeout(() => {
        allPages[pageIndex].classList.remove("active");
        allPages[index].classList.add("active");
        pageIndex = index;
        
    }, 500);

    setTimeout(() => {
        overlay.style.animation = null;
    }, 1000)

}