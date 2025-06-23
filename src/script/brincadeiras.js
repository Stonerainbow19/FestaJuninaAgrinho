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
    clearContentWindow();
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
        contentWindow(
            `
            1 recipiente<!>
            Peixinhos de brinquedo (Papelão, plastico, etc)<!>
            1 vara dde pescar de brinquedo<!>
            
            `,
            `
            lalal
            `
            ,
            `
            a) Os participantes, um de cada vez, tentam pescar os peixinhos com a vara.<!>
            b) Cada peixinho pescado pode ter uma pontuação ou um prêmio correspondente.<!>
            c) A brincadeira pode ser individual ou em equipes, com o objetivo de somar a maior quantidade de pontos ou pescar o maior número de peixes<!>
            `
        );
        break;

    case namesBrincadeiras[1]:
        contentWindow(
        `
        1 caixa de papelão média<!>
        Estilete<!>
        Tinta Guache<!>
        EVA<!>
        Cola para EVA<!>
        Tintas Confetti<!>
        Cola quente<!>
        Tesoura<!>
        Marcador Permanente Acrilex<!>
        Bolinha plástica<!>
        `,
        `
        a) Corte a boca do palhaço com o estilete.<!>
        b) Pinte a caixa por dentro e por fora.<!>
        c) Faça dois cortes laterais, encaixe os cabelos do palhaço. Pinte com tinta confetti<!>
        d) Faça um corte na parte superior da caixa e encaixe o chapéu.<!>
        e) Cole as partes dos olhos sobrepostas em EVA.<!>
        f) Cole os olhos e o nariz com cola quente na frente da caixa.<!>

        `
        ,
        `
        a) Tire par ou ímpar para iniciar a brincadeira. Cada jogador arremessará a bolinha 05 vezes seguidas.<!>
        b) Cada vez que o jogador encaixar a bolinha na boca do palhaço, marcará 50 pontos.<!>
        c) Vencerá o jogador que conseguir maior número de pontos.<!>
        `





        );
        break;

    case namesBrincadeiras[2]:
        contentWindow(
        `Sacos de tecido resistentes (de estopa, arroz, etc.) que caibam até a cintura ou quadril dos participantes.<!>`,
        `Os participantes entram nos sacos, deixando-os na altura da cintura ou quadril, e seguram a borda do saco com as mãos.<!>`,
        `
        a)As crianças devem vestir os sacos e esperar o apito, numa linha.<!>
        b) Para começar a corrida, as crianças deverão segurar o saco com uma mão para evitar que o saco caia abaixo dos joelhos, e manter o equilíbrio com a outra para poder saltar ou pular.<!>
        c) Durante todo o percurso da corrida as crianças devem manter ambas pernas no saco até alcançar a linha de chegada.<!>

        d) Perde quem se caia pelo caminho.<!>

        e) Ganha quem chega primeiro à linha de meta.<!>

        f) É classificado quem alcança a linha de chegada.<!>

        `


            
        );
        break;

    case namesBrincadeiras[3]:
        contentWindow(
        `Cadeiras<!>
        aparelho de som<!>`,

        `
        Para brincar basta organizar um círculo com cadeiras sendo que uma criança senta em cada uma delas.<!>

        `,
        `
        a) O líder fica de fora e ao gritar “já” ou ligar uma música, as crianças se levantam e começam a circular em volta dos objetos.<!>
        b) Uma cadeira é retirada enquanto eles ficam andando.<!>
        c) Quando a música para, as crianças devem sentar-se rapidamente.<!>
        d) Em cada rodada, uma criança ficará de fora, vence quem se sentar na última cadeira.<!>
        `
        );
        break;

    case namesBrincadeiras[4]:
        contentWindow(
        `
        fita adesiva dupla face<!>
        desenho grande da traseira de um burrinho sem o rabo<!>
        feltro ou papel<!>
        venda de olho<!>
        `,


        `
        a) O desenho de burrinho é colado na parede.<!>
        b) O rabo, feito de feltro (ou de papel) e com um pedaço de fita adesiva dupla face na ponta, fica separado.<!>

        `
        ,
        `
        Com os olhos vendados, cada participante vai ter de acertar o lugar do rabo. Vence quem pregá-lo mais próximo.<!>
        `

        );
        break;

    case namesBrincadeiras[5]:
        contentWindow(

        `Garrafinhas PET<!>
        Primer<!>
        Tinta Acrílica fosca (várias cores)<!>
        Marcdor permanente<!>
        EVA<!>
        Fitilhos<!>
        Olhinhos móveis<!>
        Pincel<!>
        Tesoura<!>`,
        `
        a) Passe uma demão de Primer em cada garrafinha. Espere secar.<!>
        b) Pinte as garrafinhas com a Tinta Acrílica fosca (uma de cada cor).<!>
        c) Com o Marcador Permanente desenhe a sobrancelhas, boca e nariz.<!>
        d) Cole os olhinhos móveis.<!>
        e) Corte pedaços de fitilho, encaracole com a tesoura e cole no topo da garrafa.<!>
        f) Corte um círculo de EVA vazado no centro e encaixe no topo da garrafinha.<!>
        g) Coloque a tampinha. Está pronto o jogo, é só criar as regras e brincar a valer<!>

        `,
        `
        a) Tire par ou ímpar para iniciar a brincadeira. Cada jogador arremessará 10 argolas, uma de cada vez, tentando sempre “capturar” os bonequinhos.<!>
        b) Cada bonequinho capturado valerá 10 pontos, portanto vence a brincadeira a criança que “capturar” mais bonequinhos.<!>

        `



        );
        break;

    case namesBrincadeiras[6]:
        contentWindow(
        `Uma sala ou um outro ambiente isolado`,
        `
        Na sala há um guarda que vigia o prisioneiro, enquanto outro anda pela festa à espera que alguém indique quem gostaria de prender<!>
        `,
        `
        Para o preso, a saída da prisão deve ser determinada pelo pagamento da fiança ou por uma tarefa submetida ao presidiário.<!>
        `




        );
        break;

    case namesBrincadeiras[7]:
        contentWindow(

        `
        Papel<!>
        Tesoura<!>
        Cola Branca<!>
        Canetas coloridas<!>
        Fitas<!>
        Outros materiais de sua preferência<!>
        
        `,`
        a) Faça cartões (de preferência em formato de coração, ou outros formatos divertidos).<!>
        b) Escreva mensagens curtas e criativas nos cartões. Pode ser uma declaração de amor, uma brincadeira, um elogio ou qualquer outra mensagem que deseja<!>
        c) Decore-o<!>
        d) Entegue a carta para o "carteiro" para enviar a carta para o destinatário<!>
        `,`
        A carta tem que se manter anônima<!>
        `
        );
        break;

    case namesBrincadeiras[8]:
        contentWindow(
    `
        1 Reciente com água.<!>
        Muitas maçãs dentro.<!>
        1 toalha.<!>

        `,`
        Coloque as maçãs no recipiente (de forma que elas boiam).<!>
        `,`
        a) O jogador tem que manter seus braços atrás das costas.<!>
        b) O jogador tem como objetivo, morder e trazer para a superficie a maior quantidade de maçãs possível.
        `
        );

    }


    
}

function exitWindow(){
    clearContentWindow();
    modalWindow.style.display = "none";
}



function contentWindow(listIngredientes,listProcedimentos,listRegras){
    let listIngredientesHTML = '';
    let listProcedimentosHTML = '';
    let listRegrasHTML= '';

    listIngredientes = listIngredientes.split("<!>");
    listProcedimentos = listProcedimentos.split("<!>");    
    listRegras = listRegras.split("<!>");

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
        <li>${listRegras[i]}</li>
        
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

