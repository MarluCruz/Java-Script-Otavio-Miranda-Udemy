const pessoal = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,
    fala (){
        console.log (`A minha idade atual é ${this.idade}.`);
    },
    incrementaIdade() {
        this.idade++;
    }
};

pessoal.fala();
pessoal.incrementaIdade();
pessoal.fala();
pessoal.incrementaIdade();
pessoal.fala();
pessoal.incrementaIdade();
pessoal.fala();
pessoal.incrementaIdade();
pessoal.fala();
pessoal.incrementaIdade();
