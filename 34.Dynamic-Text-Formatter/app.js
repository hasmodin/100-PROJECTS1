
const h2 =document.querySelector("h2");
const inp = document.querySelector("input");
inp.addEventListener("input" , () => {
    h2.innerText = inp.value;
})

    
    document.getElementById("btn-container").addEventListener("click", (event) => {
        console.log("button was clicked");
        
        if(event.target.classList.contains("upper")) {
            h2.innerHTML = h2.innerHTML.toUpperCase();
        }else if(event.target.classList.contains("lower")){
            h2.innerHTML = h2.innerHTML.toLowerCase();
        }else if(event.target.classList.contains("capital")) {
            h2.innerHTML = h2.innerHTML.charAt(0).toUpperCase() + h2.innerHTML.slice(1).toLowerCase();
        }else if(event.target.classList.contains("bold")){
            h2.style.fontWeight = "900";
        } else if(event.target.classList.contains("italic")) {
            h2.style.fontStyle = "italic";
        }else if(event.target.classList.contains("underline")) {
            h2.style.textDecoration = "underline";
        }
       
    })
    

    
