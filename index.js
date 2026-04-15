let num1El = document.getElementById("num1-el")
let num2El = document.getElementById("num2-el")

let sumel = document.getElementById("sum-el")
let diffel = document.getElementById("diff-el")
let divel = document.getElementById("div-el")
let mulel = document.getElementById("mul-el")

function getValues() {
    let num1 = Number(num1El.value)
    let num2 = Number(num2El.value)
    return [num1, num2]
}

function add(){
    let [num1, num2] = getValues()
    sumel.textContent = "Sum: " + (num1 + num2)
}

function sub(){
    let [num1, num2] = getValues()
    diffel.textContent = "Diff: " + (num1 - num2)
}

function div(){
    let [num1, num2] = getValues()
    divel.textContent = "Div: " + (num1 / num2)
}

function mul(){
    let [num1, num2] = getValues()
    mulel.textContent = "Mul: " + (num1 * num2)
}