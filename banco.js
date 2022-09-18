function Banco(conta, saldo, tipo, agência){

    this.conta = conta
    this.saldo = saldo
    this.tipo = tipo
    this.agencia = agência

    this.buscarSaldo = function (){
        return saldo
    }

    this.deposito = function (deposito){
        this.saldo += deposito
    }

    this.saque = function (saque){
        this.saldo -= saque
    }

    this.numeroDaconta = function (numeroDaconta){
        return numeroDaConta
    }

}

var minhaConta = new Banco("0821", 300, "conta poupança", 12345)

console.log("Minha Conta: " + minhaConta.conta)
console.log("Meu Saldo: " + minhaConta.saldo)
console.log("Tipo de conta: " + minhaConta.tipo)
console.log("Agência: " + minhaConta.agencia)


minhaConta.saque(90)
minhaConta.deposito(900)
console.log("Saldo atualizado: " + minhaConta.saldo)








