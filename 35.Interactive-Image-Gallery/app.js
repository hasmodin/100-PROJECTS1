
const images = document.querySelectorAll("img");
const imageWrapper = document.getElementById("fullImg");
const wrapper = document.getElementById("wrapper");
const close = document.querySelector("span");

images.forEach((img, index) => {
    img.addEventListener("click", () => {
        console.log("image clicked");
        opneModel(`./assets/img${index}.jpg`);
    })
})

function opneModel(pic) {
    wrapper.style.display = "flex";
    imageWrapper.src = pic;
}

close.addEventListener("click", () => {
    wrapper.style.display = "none";
});