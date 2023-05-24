let a = Number(prompt('Digite o valor de a'))
let b = Number(prompt('Digite o valor de b'))
let c = Number(prompt('Digite o valor de c'))

if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
       document.write(`O triângulo é Equilátero`)
    }else if(a === b || a === c || b === c) {
       document.write("O triângulo é Isósceles")
    }else {
       document.write("O triângulo é Escaleno")
    }
}else{
    document.write(`Não existe triângulo com estes valores`)
}