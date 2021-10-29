class Lancamento {
    constructor(nome = 'generico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}


class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes  
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(lancamento => this.lancamentos.push(lancamento ))
        console.log(this.lancamentos)
    }

    sumario() {
        let valorConsolidado = 0

        this.lancamentos.forEach(lancamento => {
            valorConsolidado += lancamento.valor
        })

        return valorConsolidado

    }
}


const salario = new Lancamento('salario', 500000)
const contaDeLuz = new Lancamento('luz', 500)


const contas = new CicloFinanceiro('12', 2020)

contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())