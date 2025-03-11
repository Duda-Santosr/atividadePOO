class Pessoa{
    constructor(nome, especialidade) {
        // o constructor é um metodo tradicional
        this.nome = nome;
        this.especialidade = especialidade;
    }
    //metodo
    apresentar () {
        return `Olá, sou ${this.nome} e minha especialidade é ${this.especialidade}.`;
    }
}


//herdou as infos da classe pessoa
class Funcionario extends Pessoa{
    falar = () => (`Olá, sou ${this.nome} e minha profissão é ${this.especialidade}, eu cuido da saúde mental das pessoas.`);
    dizer = () => console.log(`Olá, sou ${this.nome} e minha especialidade é ${this.especialidade}, responsável por cuidar das grávidas e seus bebês.`);
    explicar = () => console.log(`Olá, sou ${this.nome} e minha profissão é ${this.especialidade}, que cuida dos hábitos nutricionais dos pacientes.`);
    comentar = () => console.log(`Olá, sou ${this.nome} e minha especialidade é ${this.especialidade}, ajuda na saúde bucal e tratamento dos dentes.`);
    explicando = () => console.log(`Olá, sou ${this.nome} e minha especialidade é ${this.especialidade}, responsável por realizar as cirurgias e tratamentos do cérebro.`);
    falando = () => console.log(`Olá, sou ${this.nome} e minha especialidade é ${this.especialidade}, que é responsável por tratar diagnósticos relacionados ao coração.`);
}


const Duda = new Funcionario("Duda", "Pediatria")
const Isabela = new Funcionario("Isabela", "Psicologa")
const Yasmin = new Funcionario("Yasmin", "Obstetria")
const Leonardo = new Funcionario("Leonardo", "Nutricionista")
const Lucas = new Funcionario("Lucas", "Dentista")
const Felipe = new Funcionario("Felipe", "Neurocirurgia")
const Vitor = new Funcionario("Vitor", "Cardiologista")

Duda.apresentar();
Isabela.falar();
Yasmin.dizer();
Leonardo.explicar();
Lucas.comentar();
Felipe.explicando();
Vitor.falando();

const paragrafo = document.createElement('p');
paragrafo.textContent = Duda.apresentar();
document.body.appendChild(paragrafo);

