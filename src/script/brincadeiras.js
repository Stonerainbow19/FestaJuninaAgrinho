const gridBrincadeiras = document.querySelector('.grid-brincadeiras');

const modalWindow = document.getElementById("modal-brincadeirasID");

let namesBrincadeiras = []

function createCard(name, fileIMG){
    clearContentWindow()
    gridBrincadeiras.innerHTML+= `
            <div class="card-brincadeiras" onclick="openWindow(event)">
                <img src="/src/assets/img/${fileIMG}" alt="">
                <div class="card-brincadeiras-wrapper">
                  <h2>${name}</h2>
                  
                </div>
            </div>
    `
    name = name.split("</br>")
    if(name.length >= 2){

        name = name[0] +name[1];

    }else {
        name = name[0];
    }

    namesBrincadeiras.push(name)
};

createCard("Pescaria","pescaria.png");
createCard("Boca do palhaço","palhaco.png");
createCard("Corrida de saco", "corrida-de-saco.png");
createCard("Dança das cadeiras", "cadeiras.png");
createCard("Rabo </br>de burro", "burro.png");
createCard("Jogo da argola", "argolas.png");
createCard("Cadeia", "cadeia.png");
createCard("Correio Elegante", "correio-elegante.png");
createCard("Pescaria de Maçã","pescaria-maca.png");


function openWindow(event){
    const elementClicked = event.target;

    const positionElement = elementClicked.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const topPosition = scrollTop + positionElement.top

    modalWindow.style.top = `${topPosition - 100}px`;
    const parentElement = elementClicked.offsetParent;
    
    const img = parentElement.children[0].src;
    let name = parentElement.children[1].innerText;
    name = name.split("\n");
    if(name.length >= 2){
        name = name[0] + " "+name[1];
    }else {
        name = name[0];
    }

    document.querySelector('.name-modal-brincadeiras').innerText = name;
    document.getElementById('img-brincadeiras').src = img;

    modalWindow.style.display = "flex";

    switch (name){
        case namesBrincadeiras[0]:
            contentWindow([],[],[]);
            break;

        case namesBrincadeiras[1]:
            contentWindow([],[],[]);
            break;

        case namesBrincadeiras[2]:
            contentWindow([],[],[]);
            break;

        case namesBrincadeiras[3]:
            contentWindow([],[],[]);
            break;

        case namesBrincadeiras[4]:
            contentWindow([],[],[]);
            break;

        case namesBrincadeiras[5]:
            contentWindow([],[],[]);
            break;

        case namesBrincadeiras[6]:
            contentWindow([],[],[]);
            break;

        case namesBrincadeiras[7]:
            contentWindow([],[],[]);
            break;

        case namesBrincadeiras[8]:
            contentWindow([],[],[]);

    }


    
}

function exitWindow(){
    clearContentWindow();
    modalWindow.style.display = "none";
}



function contentWindow(listIngredientes,listProcedimentos,listRegras){
    let listIngredientesHTML;
    let listProcedimentosHTML;
    let listRegrasHTML;

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

    for(let i = 0; i < listRegras.length; i++){
        listRegrasHTML += `
        <li>${listProcedimentos[i]}</li>
        
        `
    }


    document.querySelector(".content-modal-brincadeiras").innerHTML +=`
                
                <h3>Materiais</h3>
                <ul class="list-materiais">
                    ${listIngredientesHTML}
                </ul>
                
                <h3>Procedimento</h3>
                <ol class="list-procedimento">
                    ${listProcedimentosHTML}
                </ol>

                <h3>Regras</h3>
                <ol class="list-regras">
                    ${listRegrasHTML}
                </ol>
    `

}

function clearContentWindow(){
    document.querySelector(".content-modal-brincadeiras").innerHTML = ""
}

