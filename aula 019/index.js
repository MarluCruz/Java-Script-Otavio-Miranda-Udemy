/*
 Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - Valores copiados

 Referência (mutável) - Array, obejct, function // Passados por referência
 */

const a ={
    nome: 'Luiz',
    sobrenome: 'otávio'
};

const b = {...a};

//const b = a;
a.nome = 'Joao';
console.log(b);







 /*let a = [1, 2, 3];
//let b =a;
let b =[...a];
let c = b;
console.log(a, b); // Eles apontam para o mesmo lugar na memória
a.push(4);
console.log(a)
console.log(b)

a.push('Luiz');

console.log(c);*/

 /*let a = 'A';
let b = a; // Cópia
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);*/


/*let nome='Luiz';
nome[0]='R';
console.log(nome[0])
nome = 'Otávio';
console.log(nome);*/