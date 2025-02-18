let button = document.getElementById("button")
let texts = document.getElementsByClassName("title-red")

button.addEventListener("click", function () {
    for (let index = 0; index < texts.length; index++) {
       if(texts[index].tagName === "H3") {
    texts[index].textContent = "Esse texto é um H3"
    }
}
})