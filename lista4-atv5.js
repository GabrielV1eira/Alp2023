let n = Number(prompt("Digite um número correspondente a um mês."))
let mes = null

switch(n){
  case 1:
    mes = "O mês correspondente é Janeiro."
    break
  case 2:
    mes = "O mês correspondente é Fevereiro."
    break
  case 3:
    mes = "O mês correspondente é Março."
    break
  case 4:
    mes = "O mês correspondente é Abril."
    break
  case 5:
    mes = "O mês correspondente é Maio."
    break
  case 6:
    mes = "O mês correspondente é Junho."
    break
  case 7:
    mes = "O mês correspondente é Julho."
    break
  case 8:
    mes = "O mês correspondente é Agosto."
    break
  case 9:
    mes = "O mês correspondente é Setembro."
    break
  case 10:
    mes = "O mês correspondente é Outubro."
    break
  case 11:
    mes = "O mês correspondente é Novembro."
    break
  default:
    mes = "O mês correspondente é Dezembro."
}
document.write(mes)
