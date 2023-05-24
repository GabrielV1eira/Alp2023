let a = Number(prompt('Digite o valor de a'))
let b = Number(prompt('Digite o valor de b'))
let c = Number(prompt('Digite o valor de c'))
del=Math.pow(b,2)-4*a*c
x1=(-b+del)/(2*a)
x2=(-b-del)/(2*a)
if (a!==0){
    if (del>0){
        document.write(`A equação tem duas raízes distintas, que são elas: ${x1} e ${x2}`)
    }
    else if (del==0){
        document.write(`A equação tem duas raízes iguais, que é: ${x1}`)
    }
    else{
        document.write(`A equação não possui raízes reais.`)
    }
}
else{
    document.write("O valor de `a` não pode ser 0.")
}