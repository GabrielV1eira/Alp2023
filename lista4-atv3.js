let n1= Number(prompt("Digite sua primeira nota:"))
let n2= Number(prompt("Digite sua segunda nota:"))
let n3= Number(prompt("Digite sua terceira nota:"))
m=(n1+n2+n3)/3
if (m>=7){
    document.write("Parabéns, você foi aprovado!")
}
else if(m>=5 && m<7){
    document.write("Infelizmente, você está de recuperação.")
}
else{
    document.write("Infelizmente, você está reprovado.")

}