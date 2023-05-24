let ano = Number(prompt('Digite um ano'))
if (ano>=1){
    if (ano%100==0){
        document.write(`O século é ${parseInt(ano/100)}`)
    }
    else{
        document.write(`O século é ${parseInt(ano/100)+1}`)
    }
}
else{
    document.write("Digite um ano válido")
}