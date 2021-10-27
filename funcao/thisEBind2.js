function Pessoa() {
    this.idade = 0

    //nesse contexto o this é o próprio objeto pessoa.
    const self = this
    
    setInterval(function(){

        //o this não está associado ao objeto pessoa, pois não é ele que está chamando a função e sim o temporizador.    
        self.idade++
        console.log(self.idade)
        
    }/*.bind(this)*/, 1000)
}

new Pessoa()