//Cria uma class 
class contaBancaria {
//Sempre formos instaciar os parâmetros da classe, do que será passado para ela, usaremos o constructor
//Parâmetros da conta bancária ...
    constructor(agencia, numero, tipo)  {
        //this refere-se ao objeto, no caso contaBancaria
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        /*Utiliza-se o _ para manipular o SALDO por getter e setter para que a nossa
        função getter e setter tenha o nome saldo, mas a propriedade não terá o nome saldo */
        this._saldo = 0;
    }

        //Setando o getter e o setter do SALDO
    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    /*Cria método sacar e usa o IF, para verificar se o valor é maior do que o saldo
    para saque. Ao final, retorna o valor do saldo. */

    sacar(valor) {
        if (valor > this._saldo) {
            return "Operação negada";
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar (valor) {
        this._saldo =+ + valor;

        return this._saldo
    }
}

/*Criando classe filha com herança de todos os parâmetros da classe pai */
//Usando o extends, é atribuído a classe pai, nesse exemplo é a contaBancaria
class contaCorrente extends contaBancaria {
    constructor(agencia, numero, cartaoCredito) {
    /*Utiliza o super para mandar todos os dados recebidos para a classe pai contaBancaria
    que vai setar para a filha, todas as propriedades do pai */
        super (agencia, numero);
        //Já seta o valor de tipo
        this.tipo = 'corrente'; 
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito () {
        return this._cartaoCredito;
    }

    set cartaoCredito (valor) {
        this._cartaoCredito = valor;
    }
}

class contaPoupanca extends contaBancaria {
    constructor (agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupança';

    }
}

class contaUniversitaria extends contaBancaria {
    constructor (agencia, numero) {
        super(agencia, numero);
        this.tipo = 'Universitária';

    }

    //Sobescreve o valor de SACAR, nessa classe filha, onde terá limite de saque
    sacar(valor) {
        if (valor > 500) {
            return 'Operação negada!';
        }

        this._saldo = this._saldo - valor;
    }
}