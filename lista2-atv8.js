let v= Number(prompt("Digite o valor do boleto"))
let j= Number(prompt("Digite o valor do juros (apenas números))"))
let d= Number(prompt("Digite a quantidade de dias de atrazo"))
p=v+(v*(j/100))*d
document.write(`Você pagará ${p.toFixed(2)} reais por prestação`)