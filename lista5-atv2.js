let ano = Number(prompt("Digite um ano"))
if (ano>=1){
    if (ano%4==0 && (ano%100!=0 || ano%400==0)){
        document.write(`${ano} é bissexto`)
    }
    else{
        document.write(`${ano} não é bissexto`)
    }
}
else{
    document.write("Digite um ano válido")
}