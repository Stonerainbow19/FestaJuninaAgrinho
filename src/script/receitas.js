const gridReceitas = document.querySelector('.grid-receitas');

const modalWindow = document.getElementById("modal-receitasID");

let namesReceitas = []

function createCard(name, fileIMG,sugary,hours){
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
                          <h3>${hours}</h3>
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

    namesReceitas.push(name);
};



createCard("Canjica","canjica.png",true,"1d");
createCard("Pamonha Salgada","pamonha.png",false,"1h");
createCard("Pé de Moleque", "pe-de-moleque.png",true,"45min");
createCard("Pipoca", "pipoca.png",false,"10min");
createCard("Maçã do</br> Amor", "maca-do-amor.png",true,"30min");
createCard("Pastel", "pastel.png",false,"35min");
createCard("Cachorro Quente", "cachorro-quente.png",false,"30min");
createCard("Quentão", "quentao.png",true,"40min");
createCard("Cural","cural.png",true,"1h");


function openWindow(event){
    clearContentWindow();
    let elementClicked = event.target;

    if(elementClicked.outerHTML == '<img src="/src/assets/img/relogio.png" alt="Tempo estimado de preparo">'){
        elementClicked = elementClicked.offsetParent;
    }

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
    
    modalWindow.style.display = "flex";

    
    switch (name){
        case namesReceitas[0]:
            contentWindow(
            `
            2 xícaras (chá) de Canjica de Milho<!>
            2 litros de água<!>
            1 xícara (chá) de açúcar<!>
            1 litro de leite<!>
            100g de coco ralado<!>
            Um pouco de Cravo-da-Índia e Canela-da-China em Casca Kitano a gosto<!>
            1 lata de leite condensado<!>
            1 lata de creme de leite<!>
            `,
            `
            Deixe a canjica de molho na água por 24 horas.<!>
            Transfira a receita de canjica cremosa para uma panela de pressão com água.<!>
            Adicione o cravo e a canela e cozinhe sua canjica de milho por 45 minutos.<!>
            Acrescente o açúcar, o leite, o leite condensado e o coco. Com a panela destampada, cozinhe até engrossar a canjica de milho.<!>
            Desligue o fogo e acrescente o creme de leite. Misture e sirva sua canjica doce.<!>
            Pronto, agora você já sabe como fazer canjica doce!<!>
            `

            );
            break;

        case namesReceitas[1]:
            contentWindow(
            `
            12 espigas de milho com palhas<!>
            3 colheres de sopa de queijo minas ou parmesão ralado<!>
            1 colher de sopa de margarina<!>
            1 xícara de chá de leite<!>
            Meia colher de chá de açúcar<!>
            2 colheres de chá de sal<!>
            `,
            `
            1 Separe as palhas das espigas e reserve-as para embalar a pamonha depois de pronta.<!>
            2 retire os milhos das espigas e bata no liquidificador até tritura-los.<!>
            3 Depois de batido, adicione leite e bata novamente até misturar.<!>
            4 Peneire esse creme de milho em uma peneira grossa e deixe o conteúdo em uma vasilha.<!>
            5 No creme peneirado, adicione o sal, o queijo ralado e o açúcar, e misture.<!>
            6 Limpe a palha do milho e molde-as em pequenos copos.<!>
            7 Despeje o conteúdo peneirado nas palhas, feche com outro pedaço de palha e amarre com barbante para fechar completamente.<!>
            8 Cozinhe em água por cerca de 10 minutos. Sirva quente ou frio!<!>
                `

            );
            break;

        case namesReceitas[2]:
            contentWindow(
            `
            1 xícara (chá) de açúcar<!>
            1 xícara (chá) de amendoim sem pele e torrado<!>
            1 lata de Leite (lata ou caixinha) 395g<!><!
            `,
            `
                
            1 Em uma panela, misture o açúcar e o amendoim e leve ao fogo baixo, mexendo sempre até o açúcar caramelizar, sem deixar escurecer.<!>
            2 Adicione o Leite MOÇA em fio e mexa com colher de cabo longo, por cerca de 15 minutos ou até a massa se desprender do fundo da panela.<!>
            3 Unte uma superfície lisa de mármore ou assadeira com manteiga, despeje a mistura e nivele com a ajuda de uma espátula ou rolo de massa.<!>
            4 Deixe esfriar e corte em losangos.<!>
            `
            );
            break;

        case namesReceitas[3]:
            contentWindow(
            `        
            1 copo de 200ml de milho<!>
            5 colheres (sopa) de óleo<!>
            Caldo em pó (bacon, carne)<!>
            1/2 colher (sobremesa) de margarina<!>
            Sal<!>
            `,
            `
            1 Coloque o óleo e a margarina em uma panela (funda ou própria para pipoca).<!>
            2 Deixe fritar até escurecer um pouco (isso é o que dá o gosto de manteiga na pipoca).<!>
            3 Coloque o milho e feche bem com a tampa da panela.<!>
            4 Deixe em fogo forte.<!>
            5 NÃO MEXA A PANELA (é isso que faz estourar todos os grãos).<!>
            6 Quando estiver estourando pouco, desligue para não queimar.<!>
            `
            );
            break;

        case namesReceitas[4]:
            contentWindow(
            `
            1kg de açucar<!>
            1 colher (sopa) de vinagre<!>
            12 maçãs (pequena/média)<!>
            500ml de água<!>
            corante vermelho<!>
            `, 
            `
            1 Lave e seque as maçãs. <!>
            2 Espete-as com 1 ou 2 palitos (ajudará na firmeza na hora de caramelizar).<!>
            3 Unte formas de alumínio (pode ser de bolo) com óleo, bem pouco.<!>
            4 Coloque todos os ingredientes dentro de uma panela.<!>
            5 Misture apenas mexendo a panela - não use nenhum tipo de colher, pois, pode quebrar o ponto da calda.<!>
            6 Até a fervura, pode usar fogo alto, quando ferver, mude para médio e mantenha por aproximadamente 25 minutos.<!>
            7 Mergulhe a ponta de um palito de sorvete na calda e pingue na forma em segundos.<!>
            8 Pressione com o dedo (ela amassará) e solte sobre a forma; se ela fizer barulho de sólida, desligue imediatamente e comece o processo de mergulhar as maçãs e colocá-las sobre a forma previamente untada.<!>

            `
            );
            break;

        case namesReceitas[5]:
            contentWindow(
            `
                2 xícaras (chá) de farinha de trigo<!>
                1 ovo<!>
                ¼ de xícara (chá) de água<!>
                1½ colher (sopa) de óleo<!>
                2½ colheres (sopa) de cachaça<!>
                1 colher (chá) de sal<!>
                farinha de trigo a gosto para polvilhar a bancada<!>
            `,
            `

            1 Coloque a farinha misturada com o sal em uma vasilha ou uma mesa e abra um buraco no meio.<!>
            2 Nesse buraco, coloque o óleo, a aguardente e um pouco de água.<!>
            3 Misture a água e a farinha aos poucos, cada vez pegando um pouco mais de farinha da borda do buraco.<!>
            4 Quando a massa estiver ficando dura, coloque mais água.<!>
            5 Em uma superfície enfarinhada, abra a massa com o auxílio de um rolo, de forma que ela fique bem fina.<!>
            6 Recheie a gosto, e feche com um garfo ou com o verso de uma faca.<!>
            7 Frite em óleo quente (não muito) em fogo médio-alto e escorra com o auxílio de uma escumadeira, antes de deixar para secar em papel absorvente.<!>

            `

            );
            break;

        case namesReceitas[6]:
            contentWindow(
                `

            300 g de salsicha<!>
            1 cebola<!>
            1 tomate<!>
            1 colher de manteiga<!>
            1 copo de extrato de tomate<!>
            1 caixa de creme de leite<!>
            1/2 medida do copo de extrato de tomate de água<!>
  
        `    
            ,
            `
            1 Pique a cebola e o tomate, refogue bem na manteiga.<!>
            2 Acrescente o extrato de tomate, corte a salsicha em rodelas e deixe cozinhar a gosto, se presiso acrescente a medida de água.<!>
            3 Depois de cozinhar bem, acrescente o creme de leite e é so servir.<!>
            4 Acrescente batata palha, milho verde, catchup e maionese. Fica espetacular!<!>
            `
            
            
            );
            break;

        case namesReceitas[7]:
            contentWindow(
            `
            1 garrafa de cachaça (600 ml)<!>
            600 ml de água<!>
            500 g de açúcar<!>
            casca de 2 laranjas<!>
            casca de 1 limão<!>
            50 g de gengibre em pedacinhos<!>
            cravo-da-índia a gosto<!>
            canela em pau a gosto<!>
            1 maçã cortada em pedacinhos<!>"
            `,
            `
            1 Colocar em uma panela grande o açúcar, as cascas de laranja, as cascas de limão, o gengibre, o cravo e a canela.<!>
            2 Quando o açúcar estiver derretendo, colocar a cachaça e a água, deixando cozinhar por 20 a 25 minutos em fogo médio.<!>
            3 Filtre e, após, coloque a maçã picadinha.<!>
            4 Manter no fogo, após o preparo.<!>
            
        
            `



            );
            break;

        case namesReceitas[8]:
            contentWindow(
            `
            4 espigas de milho-verde raladas<!>
            1 xícara (chá) de água<!>
            2 xícaras (chá) de Leite Líquido Integral<!>
            meia colher (sopa) de manteiga<!>
            1 lata de leite condensado 395g<!>
            canela em pó para polvilhar<!>
            `,
            `
            1. Em um liquidificador, bata o milho com a água. Passe por uma peneira e reserve.<!>
            2. Em uma panela, acrescente o milho reservado, o Leite integral e a manteiga e cozinhe mexendo sempre, até obter um creme grosso.<!>
            3. Acrescente o leite condensado e cozinhe por mais 5 minutos.<!>
            4. Despeje em uma travessa e polvilhe a canela em pó. Sirva frio ou gelado.<!>
            `
    );

    }
    
    
    

}





function exitWindow(){
    modalWindow.style.display = "none";
    clearContentWindow();
}



function contentWindow(listIngredientes,listProcedimentos){
    let listIngredientesHTML ='';
    let listProcedimentosHTML = '';

    listIngredientes = listIngredientes.split("<!>")
    listProcedimentos = listProcedimentos.split("<!>")

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
                
                <h3>PREPARO</h3>
                <ol class="list-procedimento">
                    ${listProcedimentosHTML}
                </ol>
    `

}

function clearContentWindow(){
    document.querySelector(".content-modal-receitas").innerHTML = ""
}
