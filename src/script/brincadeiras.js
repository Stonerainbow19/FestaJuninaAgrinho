const gridReceitas = document.querySelector('.grid-brincadeiras');

const modalWindow = document.getElementById("modal-brincadeirasID");

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
                  
                </div>
            </div>
    `
};

createCard("Pescaria","pescaria.png",true);
createCard("Boca do palhaço","palhaco.png",false);
createCard("Corrida de saco", "corrida-de-saco.png",true);
createCard("Dança das cadeiras", "cadeiras.png",false);
createCard("Rabo </br>de burro", "burro.png",true);
createCard("Jogo da argola", "argolas.png",false);
createCard("Cadeia", "cadeia.png",false);
createCard("Correio Elegante", "correio-elegante.png",true);
createCard("Pescaria de Maçã","pescaria-maca.png",true);


function openWindow(event){
    const elementClicked = event.target;
    const posElement = elementClicked.getBoundingClientRect().top;

    modalWindow.bottom = posElement+'px'

    modalWindow.style.display = "flex";

    
}

function exitWindow(){
    modalWindow.style.display = "none";
}

