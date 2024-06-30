

const increament = document.querySelector(".inc");
const save = document.querySelector(".save");


let count = 0;
increament.addEventListener("click", () => {
        count ++;
        document.getElementById("count-number").value =  count;


})

save.addEventListener("click", () => {
   
    let h3 = document.createElement("h3");
    document.querySelector(".save-result").append(h3);
    h3.style.color = "white";
    h3.style.fontSize = "1.5rem";
    h3.innerText = document.getElementById("count-number").value;
    

   
})

const input = document.getElementById("count-number");
input.addEventListener("keypress", (event) => {

    event.preventDefault();
})
