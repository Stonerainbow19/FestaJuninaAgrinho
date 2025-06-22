const gridReceitas = document.querySelector('.grid-receitas');

const modalWindow = document.getElementById("modal-receitasID");

let namesReceitas = []

function createCard(name, fileIMG,sugary){
    let sugaryOrsalt;
    if(sugary){
        sugaryOrsalt = '<img src="/src/assets/img/bolinho.png" alt="Doce"></img>'
        
    }else {
        sugaryOrsalt = '<img src="/src/assets/img/croisant.png" alt="Salgado"></img>'
    }   
    gridReceitas.innerHTML+= `
            <div class="card-receitas" onclick="openWindow(event)">
                <img src="/src/assets/img/${fileIMG}" alt="">
                <div class="card-receitas-wrapper">
                  <h2>${name}</h2>
                  <div class="card-receitas-info">
                      ${sugaryOrsalt}
                      <div class="relogio-receitas">
                          <img src="/src/assets/img/relogio.png" alt="Tempo estimado de preparo">
                          <h3>2hrs</h3>
                      </div>
                  </div>
              </div>
            </div>
    `
    name = name.split("</br>")
    if(name.length >= 2){

        name = name[0] +name[1];

    }else {
        name = name[0];
    }

    namesReceitas.push(name)
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
    clearContentWindow()
    const elementClicked = event.target;

    const positionElement = elementClicked.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const topPosition = scrollTop + positionElement.top

    modalWindow.style.top = `${topPosition - 100}px`;
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

    
    switch (name){
        case namesReceitas[0]:
            contentWindow([],[]);
            break;

        case namesReceitas[1]:
            contentWindow([],[]);
            break;

        case namesReceitas[2]:
            contentWindow([],[]);
            break;

        case namesReceitas[3]:
            contentWindow([],[]);
            break;

        case namesReceitas[4]:
            contentWindow([],[]);
            break;

        case namesReceitas[5]:
            contentWindow([],[]);
            break;

        case namesReceitas[6]:
            contentWindow([],[]);
            break;

        case namesReceitas[7]:
            contentWindow([],[]);
            break;

        case namesReceitas[8]:
            contentWindow([],[]);

    }
    
    
    

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
