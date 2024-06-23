

const selectField = document.querySelector("#selectfield");
const list = document.querySelector("#list");
const options = document.querySelectorAll(".options");
console.log(options);
const selectTxt = document.querySelector("#slectText");
let icon = document.querySelector("#arrowicon");

selectField.addEventListener("click", () => {
    console.log("button was clicked");
    
    list.classList.toggle("hide");
    icon.classList.toggle("rotate");
    
    
});
 
for(option of options) {
    option.onclick = function () {
        selectTxt.innerHTML = this.textContent;
        list.classList.toggle("hide");
        icon.classList.toggle("rotate");
        

    }
}