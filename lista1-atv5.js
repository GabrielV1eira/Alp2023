let al =Number(prompt("Digite a altura da lata"))
let r =Number(prompt("Digite o raio da lata"))
vol = Math.PI*Math.pow(r,2)*al
document.write(`O volume da lata ${vol.toFixed(2)}cm³`)