const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1 = document.getElementById("p1")
let pass2 = document.getElementById("p2")
let genBtn = document.getElementById("generate-btn")
let out1 = document.getElementById("d1")
let out2 = document.getElementById("d2")

genBtn.addEventListener("click", function() {
    out1.classList.add("pass-div")
    out2.classList.add("pass-div")
    pass1.textContent = getPassword()
    pass2.textContent = getPassword()
})

function getPassword() {
    let password = ""
    let j = 0
    for(let i = 0; i < 8; i++) {
        j = Math.floor(Math.random()*characters.length)
        password += characters[j]
    }
    return password
}

const passes = document.querySelectorAll(".pass-p")

passes.forEach(p => {
    p.addEventListener("click", function() {
        const copy = p.textContent
        navigator.clipboard.writeText(copy)
        
        .then (() => {
            console.log("Text Copied!")
            alert("Copied!")
        })    
        .catch(err => {
            console.error("Clipboard error!", err)
        })
    })
})