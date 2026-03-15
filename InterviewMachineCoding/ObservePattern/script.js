import observable from "./observable.js";

const clickMebutton=document.getElementById("clickMeButton")
const checkbox=document.getElementById("checkbox")

const buttonHandler=() => {
    observable.notify("User clicked button!")
}

const checkboxHandler=() => {
    observable.notify("User toggled switch!")
}

clickMebutton.addEventListener("click", (e) => {
    e.preventDefault()
    buttonHandler()
})

checkbox.addEventListener("change", (e) => {
    e.preventDefault()
    checkboxHandler()
})

const logger=(data) => {
    console.log(`${new Date().toLocaleDateString()} ${data}`);
}

observable.subscribe(logger)