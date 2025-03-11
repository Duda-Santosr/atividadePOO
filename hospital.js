class Pessoa{
    constructor(nome, especialidade){
        // O constructor é um método tradicional
        this.nome= nome;
        this.especialidade= especialidade;
    }
    apresentar = () => console.log (`Olá, eu sou ${this.nome} e minha especialidade é ${this.especialidade}.`)
}

class Funcionario extends Pessoa{
    falar= () => console.log (`Olá, sou ${this.nome} e minha profissão é ${this.especialidade}, eu atendo crianças.`)
}


const Duda = new Funcionario("Duda, Pediatra")
const Isabela = new Funcionario("Isabela, Psicologa")
const Yasmin = new Funcionario("Yasmin, Obstetra")
const Leonardo = new Funcionario("Leonardo, Nutricionista")
const Lucas = new Funcionario("Lucas, Dermatologista")
const Felipe = new Funcionario("Felipe, Neurocirurgiao")
const Vitor = new Funcionario("Vitor, Cardiologista")


Duda.falar();
Isabela.apresentar();
Yasmin.apresentar();
Leonardo.apresentar();
Lucas.apresentar();
Felipe.apresentar();
Vitor.apresentar();