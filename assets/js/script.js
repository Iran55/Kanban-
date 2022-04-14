
const Kanban = new Workspace(0,"Kenzie Kanban")


const todo = new Secao("Todo")

Kanban.adicionarSecao(todo)

const areaSecoes = document.querySelector(".app_secoes")
Kanban.secoes.forEach(imprimirSecoes)

const inputNovaSecao = document.querySelector(".app_container_add_secao input");

const buttonNovaSecao = document.querySelector('.app_container_add_secao .app_input_add_secao');

buttonNovaSecao.addEventListener('click', salvarSecao);

function salvarSecao(){
    

    const nomeNovaSecao = inputNovaSecao.value;
    

    inputNovaSecao.value = '';

    if(validacao(nomeNovaSecao) !== false){

        const novaSecao = new Secao(nomeNovaSecao);
        
        Kanban.adicionarSecao(novaSecao);
        
        imprimirSecoes(novaSecao);
    }else{
        mostrarMensagemValidacao()
    }

}


function salvarCard(){
    
    const secaoId = this.id;
    const parent = this.parentElement;

    const inputNomeCard = parent.querySelector('input');
    const inputDescricaoCard = parent.querySelector('textarea');

    const nomeCard = inputNomeCard.value;
    const descricaoCard = inputDescricaoCard.value;

    
    inputNomeCard.value = '';
    inputDescricaoCard.value = '';

    if(validacao(nomeCard) !== false){
        const novoCard = new Card(secaoId, nomeCard, descricaoCard);
        
        Kanban.adicionarCard(secaoId, novoCard);

        //7 LISTA O CARD NA SEÇÃO ATUAL
        templateCards(novoCard);
    }else{
        mostrarMensagemValidacao()
    }
}

function imprimirSecoes(secao){
    const nomeSecao  = secao.nome

    const idSecao = secao.id;

    const header = appSecaoHeader(nomeSecao)
    const footer = appSecaoFooter(idSecao)

    const appSecao = document.createElement("div")
    appSecao.classList.add("app_secao")

    appSecao.dataset.id = idSecao

    const  listaCards = document.createElement("ul")

    appSecao.appendChild(header)
    appSecao.appendChild(listaCards)
    appSecao.appendChild(footer)
    areaSecoes.appendChild(appSecao)

    resetarControles();
}

function validacao(inputText){
    const valorTexto  = inputText.trim()

    if(valorTexto !== ""){
       return valorTexto
    }

    return false
}

