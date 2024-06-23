const input = document.querySelector("input");
const eye = document.querySelector("#eye");

eye.addEventListener("click", () => {
    console.log("eye button clicked");

    if(input.type == "password") {
        input.type = "text";
    }else {
        input.type = "password";
    }

    //using ternory operator

    // input.type ==="password" ? input.type="text" : input.type="password";
});