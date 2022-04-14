``` Javascript
function imprimirSecoes(secao){
    const nomeSecao  = secao.nome
    
    const idSecao = secao.id;

    const header = appSecaoHeader(nomeSecao)
    const footer = appSecaoFooter(idSecao)

    const appSecao = document.createElement("div")
    appSecao.classList.add("app_secao")

    appSecao.dataset.id = idSecao
   
    const  listaCards = document.createElement("ul")
    listaCards.classList.add("dropzone")
    listaCards.addEventListener("drop",drop)    
    listaCards.addEventListener("dragover",allowDrop) 

    appSecao.appendChild(header)
    appSecao.appendChild(listaCards)
    appSecao.appendChild(footer)
    areaSecoes.appendChild(appSecao)

    resetarControles();
}
