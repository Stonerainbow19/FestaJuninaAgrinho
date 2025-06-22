const gridReceitas = document.querySelector('.grid-brincadeiras');

const modalWindow = document.getElementById("modal-brincadeirasID");

let count = 0;

function createCard(name, fileIMG){
    gridReceitas.innerHTML+= `
            <div class="card-receitas" onclick="openWindow(event)">
                <img src="/src/assets/img/${fileIMG}" alt="">
                <div class="card-receitas-wrapper">
                  <h2>${name}</h2>
                  
                </div>
            </div>
    `
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
    //modalWindow.style.left = `${event.clientX}px`;
    modalWindow.style.top = `${event.clientY+200}px` ;
    const elementClicked = event.target;
    const parentElement = elementClicked.offsetParent;
    
    const img = parentElement.children[0].src;
    let name = parentElement.children[1].innerText;

    document.querySelector('.name-modal-brincadeiras').innerText = name;
    document.getElementById('img-brincadeiras').src = img;

    modalWindow.style.display = "flex";


    
}

function exitWindow(){
    document.body.style.overflowY = "auto";
    modalWindow.style.display = "none";
}

