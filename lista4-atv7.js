let n= Number(prompt("Digite um número"))
let msg = n>0? `O número é positivo: √${n} = ${Math.sqrt(n)}`: `O número é negativo: ${n}² = ${Math.pow(n,2)}`
document.write(msg)