/* Marlus Cruz tem 23 anos, pesa 84 kg tem 1,72 e seu IMC é de ''''*/
const nome = 'Marlus';
const sobrenome = 'Cruz';
const idade = 23;
const peso = 84;
const alturaem = 1.72;
let imc; // peso / (altura*altura)
let anoNascimento;
imc = peso / (alturaem*alturaem);
anoNascimento = 2022 - idade;
const arredondar = Number (imc.toFixed(2));

// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg tem ${alturaem} m e seu imc é de ${arredondar} nome  sobrenome nasceu em: ${anoNascimento}`);


/*console.log(nome, sobrenome, 'tem', idade, 'anos pesa', peso +'kg tem', alturaem + 'm e seu imc é de', arredondar, nome, sobrenome, 'nasceu em:', anoNascimento);*/