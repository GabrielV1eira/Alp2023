let c = Number(prompt("Digite o valor do produto"))
let j = Number(prompt("Digite o valor inteiro da porcentagem"))
vf=c+(c*(j/100))
document.write(`O valor final do produto será ${vf.toFixed(2)}`)