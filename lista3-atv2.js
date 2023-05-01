let v1 = Number(prompt("Digite o valor de um produto"))
let q1 = Number(prompt("Digite a quantidade desse mesmo produto"))
let v2 = Number(prompt("Digite o valor de outro produto"))
let q2 = Number(prompt("Digite a quantidade desse mesmo produto"))
let ip = Number(prompt(`Digite o valor do imposto`))
vf=(v1*q1+v2*q2)*(ip/100+1)
document.write(`O valor a ser pago é igual a $${vf.toFixed(2)}`)


