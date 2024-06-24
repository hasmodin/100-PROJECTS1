

const allLabels = document.querySelectorAll(".form-control label");

const inputs = document.querySelectorAll("input");
// console.log(inputs);

for(input of inputs) {
   input.addEventListener("click", () => {
    
    labelTxt();

   })
}

function labelTxt() {
    
    allLabels.forEach((label, index) => {
      label.innerHTML = ""
    });
    }

