function criaPessoa (nome, sobrenome, idade){
    return{nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Luiz', 'Miranda', 25);
const pessoa2 = criaPessoa('Fernanda', 'Aragão', 32);
const pessoa3 = criaPessoa('Carlos', 'Cruz', 64);
const pessoa4 = criaPessoa('Gleice', 'Freitas', 38);
const pessoa5 = criaPessoa('Marivalda', 'Pinho', 54);

console.log(pessoa1.nome, pessoa1.sobrenome, pessoa4.nome, pessoa4.sobrenome);