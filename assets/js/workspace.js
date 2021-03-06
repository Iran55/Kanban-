class Workspace{
    constructor(id,nome){
        this._id     = id;
        this._nome   = nome;
        this._secoes = [];
        this._idSecao = 0;
    }
    
    set nome(nome){
        this._nome = nome
    }

    get nome(){
        return this._nome
    }

    get secoes(){
        return this._secoes
    }
    
    adicionarSecao(secao){
        secao.id = this._idSecao;
        this._secoes.push(secao)

        this._idSecao++;
    }
    adicionarCard(idSecao,card){
        const secoes = this.secoes
        secoes[idSecao].adicionarCard(card)
    }

    removerCard(idCard,idSecao){
     this.secoes[idSecao].removerCard(idCard)
    }
   
}