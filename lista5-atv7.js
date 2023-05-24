let peso = Number(prompt("Digite o peso (em kg):"))
let al = Number(prompt("Digite a altura  (em centímetros):"))

let imc = peso / (al * al)
let clas
if (imc < 18.5) {
  clas = "Abaixo do peso"
}else if (imc >= 18.5 && imc <= 24.9) {
  clas = "Peso normal"
}else if (imc >= 25 && imc <= 29.9) {
  clas = "Acima do peso (sobrepeso)"
}else if (imc >= 30 && imc <= 34.9) {
  clas = "Obesidade I"
}else if (imc >= 35 && imc <= 39.9) {
  clas = "Obesidade II"
}else {
  clas = "Obesidade III"
}
document.write(`O IMC é: ${imc.toFixed(2)}<br>`)
document.write(`O tipo é: ${clas}`)