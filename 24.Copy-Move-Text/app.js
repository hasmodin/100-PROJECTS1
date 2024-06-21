

document.addEventListener("DOMContentLoaded", function() {
    let btn1 = document.querySelector(".btn1");
    
    


    document.querySelector(".btn2").addEventListener("click", function() {
        console.log("button2 was clicked");
        let copyText = document.querySelector(".copyTxt").value;
        let moveText = document.querySelector(".moveTxt");
        console.log(copyText);
        moveText.setAttribute("value", `${copyText}`);
        moveText.innerHTML = copyText;
        
        

    })


    document.querySelector(".btn1").addEventListener("click", () => {
        console.log("button1 was clicked");
        let h1 = document.createElement("h1");
        h1.classList.add("added");
        document.querySelector('body').append(h1);
        h1.innerHTML = "Copied";
        setTimeout(function() {
           h1.innerHTML = "";
        }, 1000);

        let copyText = document.querySelector(".copyTxt");
        copyText.select(); //select method used to select all input text
        document.execCommand("copy");
  
        

        
    })
})