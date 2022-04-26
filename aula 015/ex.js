const num1 = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = num1;

texto.innerHTML += `${num1} é inteiro: <strong>${Number.isInteger(num1)}</strong><br>`;
texto.innerHTML += `A raiz quadrada de ${num1} é: <strong>${Math.sqrt(num1)}</strong><br>`;
texto.innerHTML += `${num1} é NaN: <strong>${Number.isNaN(num1)}</strong><br>`;
texto.innerHTML += `${num1} arredondado para cima: <strong>${Math.ceil(num1)}</strong><br>`;
texto.innerHTML += `${num1} arredondado para baixo: <strong>${Math.floor(num1)}</strong><br>`;
texto.innerHTML += `${num1} arredondado para baixo: <strong>${num1.toFixed(2)}</strong><br>`;