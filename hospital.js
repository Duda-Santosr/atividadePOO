class Pessoa{
    #cadastro
    constructor(nome, especialidade) {
        // o constructor é um metodo tradicional
        this.nome = nome;
        this.especialidade = especialidade;
        this.#cadastro = this.#cadastro;
    }
 
}


//herdou as infos da classe pessoa
class Chef extends Pessoa{
    apresentar(){
        return `Olá, meu nome é ${this.nome} e minha especialidade é ${this.especialidade}, eu cuido de crianças. E também comando o Hospital Brasil.`;
    }
}

class Vice extends Pessoa{
    apresentando(){
        return `Olá, meu nome é ${this.nome} e minha especialidade é ${this.especialidade}, eu cuido da sáude mental das pessoas. E também sou Vice no comando do Hospital Brasil.`;
    }
}

class Funcionario extends Pessoa{
    falando(){
        return `Olá, meu nome é ${this.nome} e minha especialidade é ${this.especialidade}, e eu trabalho no Hospital Brasil.`;
    }
}


const Duda = new Chef("Duda", "Pediatria", 1234)

const Isabela = new Vice("Isabela", "Psicologa", 3455)

const Yasmin = new Funcionario("Yasmin", "Obstetria", 5667)
const Leonardo = new Funcionario("Leonardo", "Nutricionista", 8897)
const Lucas = new Funcionario("Lucas", "Dentista", 2332)
const Felipe = new Funcionario("Felipe", "Neurocirurgia", 5643)
const Vitor = new Funcionario("Vitor", "Cardiologista", 4323)

Duda.apresentar();


Isabela.apresentando();

Yasmin.falando();
Leonardo.falando();
Lucas.falando();
Felipe.falando();
Vitor.falando();


function exibir(mensagem) {
    const output = document.getElementById("output");
    const p = document.createElement("p");
    p.textContent = mensagem;
    output.appendChild(p);
}




exibir(Duda.apresentar());
exibir(Isabela.apresentando());
exibir(Yasmin.falando());
exibir(Leonardo.falando());
exibir(Lucas.falando());
exibir(Felipe.falando());
exibir(Vitor.falando());