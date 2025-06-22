const gridReceitas = document.querySelector('.grid-receitas');

const modalWindow = document.getElementById("modal-receitasID");

let count = 0;

function createCard(name, fileIMG,sugary){
    let sugaryOrsalt;
    if(sugary){
        sugaryOrsalt = '<img src="/src/assets/img/bolinho.png" alt=""></img>'
        
    }else {
        sugaryOrsalt = '<img src="/src/assets/img/croisant.png" alt=""></img>'
    }   
    gridReceitas.innerHTML+= `
            <div class="card-receitas" onclick="openWindow(event)">
                <img src="/src/assets/img/${fileIMG}" alt="">
                <div class="card-receitas-wrapper">
                  <h2>${name}</h2>
                  <div class="card-receitas-info">
                      ${sugaryOrsalt}
                      <div class="relogio-receitas">
                          <img src="/src/assets/img/relogio.png" alt="">
                          <h3>2hrs</h3>
                      </div>
                  </div>
              </div>
            </div>
    `
};

createCard("Canjica","canjica.png",true);
createCard("Pamonha Salgada","pamonha.png",false);
createCard("Pé de Moleque", "pe-de-moleque.png",true);
createCard("Pipoca", "pipoca.png",false);
createCard("Maçã do</br> Amor", "maca-do-amor.png",true);
createCard("Pastel", "pastel.png",false);
createCard("Cachorro Quente", "cachorro-quente.png",false);
createCard("Quentão", "quentao.png",true);
createCard("Cural","cural.png",true);


function openWindow(event){
    modalWindow.style.top = `${event.clientY+200}px` ;
    const elementClicked = event.target;
    const parentElement = elementClicked.offsetParent;
    
    const img = parentElement.children[0].src;
    let name = parentElement.children[1].innerText;
    name = name.split("\n");
    if(name.length > 2){
        name = name[0] + " "+name[1];
    }else {
        name = name[0];
    }

    document.querySelector('.name-modal-receitas').innerText = name;
    document.getElementById('img-receitas').src = img;
    
    console.log(parentElement)
    modalWindow.style.display = "flex";

    
        
    contentWindow(["abc","def"],["ppp","lll"]);
    

}





function exitWindow(){
    modalWindow.style.display = "none";
    clearContentWindow();
}



function contentWindow(listIngredientes,listProcedimentos){
    let listIngredientesHTML;
    let listProcedimentosHTML;

    for(let i = 0; i < listIngredientes.length; i++){
        listIngredientesHTML += `
        <li>${listIngredientes[i]}</li>
        
        `
    }


    for(let i = 0; i < listProcedimentos.length; i++){
        listProcedimentosHTML += `
        <li>${listProcedimentos[i]}</li>
        
        `
    }

    document.querySelector(".content-modal-receitas").innerHTML +=`
                <h3>INGREDIENTES</h3>
                <ul class="list-ingredientes">
                    ${listIngredientesHTML}
                </ul>

                <h3>PROCEDIMENTO</h3>
                <ol class="list-procedimento">
                    ${listProcedimentosHTML}
                </ol>
    `

}

function clearContentWindow(){
    document.querySelector(".content-modal-receitas").innerHTML = ""
}
