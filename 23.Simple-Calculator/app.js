document.addEventListener("DOMContentLoaded", function() {
    
    
    
    let btn = document.querySelector("button");
    let result = document.querySelector(".result");

    btn.addEventListener("click", function() {
        console.log("button was clicked");
        let operator = document.querySelector(".selectOpt").value;
        let num1 = Number(document.querySelector(".num1").value);
        let num2 = Number(document.querySelector(".num2").value);
          
        if(operator === "plus") {
            result.innerHTML = num1 + num2;
        }else if(operator === "minus") {
            result.innerHTML = num1 - num2;
        }else if(operator === "multi") {
            result.innerHTML = num1 * num2;
        }else if(operator === "divide") {
            if(num2 === 0) {
                result.innerHTML = "can't divide by 0";

            }else {
                result.innerHTML = num1 / num2;
            }
        }else {
            result.innerHTML = "Select Operator";
        }

        
        
    })
})