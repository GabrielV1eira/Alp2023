let n1= Number(prompt("Digite um número"))
let n2= Number(prompt("Digite outro número"))
let n3= Number(prompt("Digite mais um número"))
mn=n1
if(n2>mn){
    mn = n2
}
else if(n3>mn){
    mn = n3
}
else if(n1==n2 && n2==n3){
    document.write("Os números são iguais.")
}
else{
    document.write(`O maior número é: ${mn}`)
}