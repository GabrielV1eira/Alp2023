let dol = Number(prompt("Digite quanto está valendo o dólar atualmente"))
let real = Number(prompt("Quanto deseja converter para real?"))
cot=real/dol
document.write(`Você tem U$ ${cot.toFixed(2)}`)