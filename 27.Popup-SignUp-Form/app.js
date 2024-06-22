


const open = document.querySelector(".open");
const close = document.querySelector(".close");
const formContainer = document.querySelector(".form-container");

open.addEventListener("click", () => {
    console.log("button was clicked");
    formContainer.classList.add("show-form");
    console.log(formContainer);
   
});

close.addEventListener("click", () => {
    formContainer.classList.remove("show-form");
})

window.addEventListener("click", (event) => {
if(event.target === formContainer) {
    formContainer.classList.remove("show-form");
}
        

    
    
})

