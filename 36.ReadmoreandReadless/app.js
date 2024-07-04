
const content = document.querySelector(".content-container-2 ");
const btn = document.querySelector("button");
console.log(content);

let buttonText = "Read More";
btn.innerText = buttonText;

btn.addEventListener("click", () => {
    content.classList.toggle("content-container-2");

    if(buttonText === "Read More") {
        buttonText = "Read Less";
    }else {
        buttonText = "Read More";
    }
    btn.innerText = buttonText;
    
});