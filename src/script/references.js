const gridReferences = document.querySelector(".grid-references");



function createCard(fileIMG, description, font, ...prompt){
    gridReferences.innerHTML+= `
            <div class="card-references">
                <div class="card-receitas-wrapper">
                    <p>Retirado ${description}</p>
                    <img src="/src/assets/img/${fileIMG}" alt="">

                    <p>${prompt}</p>
                    <a href="${font}">Clique aqui para acessar a fonte</a>
                </div>
            </div>
    `
}; 

createCard("brincadeiras.jpg","em site", "https://batatais24h.com.br/noticia/1788/veja-7-brincadeiras-de-festa-junina-para-esquentar-e-divertir-neste-inverno");
createCard("pe-de-moleque.png","pelo ChatGPT","","Prompt: 'faça em estilo cartoon'" );
createCard("quentao.png","pelo ChatGPT","","Prompt: 'faça em estilo cartoon'" );
createCard("pipoca.png","pelo ChatGPT","","Prompt: 'faça em estilo cartoon'" );
createCard("pescaria.png","pelo ChatGPT","","Prompt: 'faça em estilo cartoon'" );
createCard("banner-sec01.jpg","em site", "https://batatais24h.com.br/noticia/1788/veja-7-brincadeiras-de-festa-junina-para-esquentar-e-divertir-neste-inverno");
createCard("cural.png","pelo ChatGPT","","Prompt: 'faça em estilo cartoon'" );