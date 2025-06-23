const gridReferences = document.querySelector(".grid-references");



function createCard(fileIMG, description, font, ...prompt){
    gridReferences.innerHTML+= `
            <div class="card-references">
                <div class="card-receitas-wrapper">
                    <p>Retirado ${description}</p>
                    <img src="/src/assets/img/${fileIMG}" alt="">

                    <p>${prompt}</p>
                    <a href="${font}">Clique aqui para acessar a imagem original</a>
                </div>
            </div>
    `
}; 

createCard("logo1.png","pelo Microsoft Designer","","Prompt: 'icone chapéu de palha, milho e canjica'" );
createCard("argolas.png","pelo ChatGPT","","Prompt: 'Faça em estilo cartoon'");
createCard("banner-sec01.jpg","em site", "https://batatais24h.com.br/noticia/1788/veja-7-brincadeiras-de-festa-junina-para-esquentar-e-divertir-neste-inverno");
createCard("brincadeiras.jpg","em site", "https://batatais24h.com.br/noticia/1788/veja-7-brincadeiras-de-festa-junina-para-esquentar-e-divertir-neste-inverno");
createCard("burro.png","pelo ChatGPT","","Prompt: 'Faça em estilo cartoon'" );
createCard("cachorro-quente.png","pelo ChatGPT","","Prompt: 'Faça em estilo cartoon'" );
createCard("cadeia.png","pelo ChatGPT","","Prompt: 'Faça em estilo cartoon'" );
createCard("cadeiras.png","pelo ChatGPT","","Prompt: 'Faça em estilo cartoon'" );
createCard("canjica.png","pelo ChatGPT","","Prompt: 'Faça em estilo cartoon'" );
createCard("correio-elegante.png","pelo ChatGPT","","Prompt: 'Faça em estilo cartoon'" );
createCard("corrida-de-saco.png","pelo ChatGPT","","Prompt: 'Faça em estilo cartoon'" );
createCard("croisant.png","em site","" );
createCard("cural.png","pelo ChatGPT","","Prompt: 'Faça em estilo cartoon'" );
createCard("maca-do-amor.png","pelo ChatGPT","","Prompt: 'Faça em estilo cartoon'" );
createCard("palhaco.png","pelo ChatGPT","","Prompt: 'Faça em estilo cartoon'" );
createCard("pamonha.png","pelo ChatGPT","","Prompt: 'Faça em estilo cartoon'" );
createCard("pastel.png","pelo ChatGPT","","Prompt: 'Faça em estilo cartoon'" );
createCard("pe-de-moleque.png","pelo ChatGPT","","Prompt: 'Faça em estilo cartoon'" );
createCard("pescaria.png","pelo ChatGPT","","Prompt: 'Faça em estilo cartoon'" );
createCard("pescaria-maca.png","pelo ChatGPT","","Prompt: 'Faça em estilo cartoon'" );
createCard("pipoca.png","pelo ChatGPT","","Prompt: 'Faça em estilo cartoon'" );
createCard("quentao.png","pelo ChatGPT","","Prompt: 'Faça em estilo cartoon'" );
createCard("receitas.png","em site", "https://batatais24h.com.br/noticia/1788/veja-7-brincadeiras-de-festa-junina-para-esquentar-e-divertir-neste-inverno");
createCard("relogio.png","em site", "https://batatais24h.com.br/noticia/1788/veja-7-brincadeiras-de-festa-junina-para-esquentar-e-divertir-neste-inverno");




