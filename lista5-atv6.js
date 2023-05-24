let centroX = Number(prompt("Digite a coordenada X do centro do círculo:"));
let centroY = Number(prompt("Digite a coordenada Y do centro do círculo:"));
let r = Number(prompt("Digite o raio do círculo:"));
let pontoX = Number(prompt("Digite a coordenada X do ponto a ser testado:"));
let pontoY = Number(prompt("Digite a coordenada Y do ponto a ser testado:"));

let dis = Math.sqrt(Math.pow(pontoX - centroX, 2) + Math.pow(pontoY - centroY, 2));

if (dis <= r) {
  document.write("O ponto está dentro do círculo.");
} else {
  document.write("O ponto está fora do círculo.");
}