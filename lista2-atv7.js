let id= Number(prompt("Digite sua idade em anos"))
let me= Number(prompt("Digite sua idade em meses"))
let dia= Number(prompt("Digite sua idade em dias"))
id_dia=id*365+me*30+dia
document.write(`Sua idade tem um total de ${id_dia} dias`)