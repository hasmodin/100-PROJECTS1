

document.addEventListener("DOMContentLoaded", () => {


    const nextBtn = document.querySelector("#next");
    nextBtn.addEventListener("click", () => {
        activeIndex ++;
        if(activeIndex > circles.length){
            activeIndex = circles.length;
        }
        updateUI();
      
    })

    const prevBtn = document.querySelector("#prev");

    prevBtn.addEventListener("click", () => {
        
        activeIndex --;
        if(activeIndex < 1) {
            activeIndex = 1;
        }

        updateUI();
    })

    let circles = document.querySelectorAll(".circle");
    let activeIndex = 1;

   const updateUI = () => {
    circles.forEach((circle, index) => {
        if(index < activeIndex) {
            circle.classList.add("active");
        }else {
            circle.classList.remove("active");
        }   
        
    });

    const actives  = document.querySelectorAll(".active");
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

    if(activeIndex == circles.length) {
        nextBtn.disabled = true;
        
    }else if(activeIndex == 1) {
        prevBtn.disabled = true;
        nextBtn.disabled = false;
    }else {
        prevBtn.disabled = false;
    }

   }

})

