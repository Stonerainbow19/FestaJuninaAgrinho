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
createCard("argolas.png","pelo ChatGPT","https://www.ludicodistribuidora.com.br/jogo-de-argolas-liso-em-mdf-com-10-pecas-pvc-enc","Prompt: 'Faça em estilo cartoon'");
createCard("banner-sec01.jpg","em site", "https://blog.multicaixasnet.com.br/e-tempo-de-festa-junina/");
createCard("brincadeiras.jpg","em site", "https://batatais24h.com.br/noticia/1788/veja-7-brincadeiras-de-festa-junina-para-esquentar-e-divertir-neste-inverno");
createCard("bolinho.png","em site", "https://www.flaticon.com/br/icone-gratis/bolinho_914585?term=doce&page=1&position=11&origin=search&related_id=914585");
createCard("burro.png","pelo ChatGPT","https://pt.dreamstime.com/burro-isolado-em-branco-fundo-image194708229","Prompt: 'Faça em estilo cartoon'" );
createCard("cachorro-quente.png","pelo ChatGPT","https://myloview.com.br/fotomural-cachorro-quente-classico-com-salsicha-grande-salada-fresca-no-597A01C","Prompt: 'Faça em estilo cartoon'" );
createCard("cadeia.png","pelo ChatGPT","https://files09.oaiusercontent.com/file-JK3XpBfXQL9DqSTybmDHAQ?se=2025-06-23T02%3A47%3A16Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D299%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D629add1d-e358-4c66-9fde-ab932b108a4d.png&sig=4i%2BwXTeCj2IU9z/Aa2gJIs7caYa8mf/kTa/3d9OTBPM%3D","Prompt: 'Faça em estilo cartoon'" );
createCard("cadeiras.png","pelo ChatGPT","https://pt.dreamstime.com/foto-de-stock-cadeira-confort%C3%A1vel-de-madeira-isolada-no-fundo-branco-image81083176","Prompt: 'Faça em estilo cartoon'" );
createCard("canjica.png","pelo ChatGPT","https://blogdaceliarossetti.wordpress.com/2014/06/24/especial-sao-joao-receita-mingau-de-milho/","Prompt: 'Faça em estilo cartoon'" );
createCard("correio-elegante.png","pelo ChatGPT","https://files09.oaiusercontent.com/file-9yZXU3ceT8LwmbFBKyshdv?se=2025-06-23T02%3A47%3A16Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D299%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D453b6254-4785-4da2-8662-70bb9d666bce.png&sig=I/UbHURNzlfh9rVWXDXfQU8147Eycbcg7GXl8LmZLjc%3D","Prompt: 'Faça em estilo cartoon'" );
createCard("corrida-de-saco.png","pelo ChatGPT","https://www.istockphoto.com/br/search/2/image?mediatype=illustration&phrase=corrida+de+saco","Prompt: 'Faça em estilo cartoon'" );
createCard("croisant.png","em site","https://www.flaticon.com/br/icone-gratis/croisant_106293?term=salgado&page=1&position=3&origin=search&related_id=106293" );
createCard("cural.png","pelo ChatGPT","https://www.istockphoto.com/br/foto/curau-creme-de-milho-doce-e-sobremesa-t%C3%ADpica-da-culin%C3%A1ria-brasileira-com-canela-gm1093186948-293372113","Prompt: 'Faça em estilo cartoon'" );
createCard("maca-do-amor.png","pelo ChatGPT","https://www.istockphoto.com/br/search/2/image-film?phrase=maca+do+amor","Prompt: 'Faça em estilo cartoon'" );
createCard("palhaco.png","pelo ChatGPT","https://files07.oaiusercontent.com/file-HBgCexXkdG5YySSKWDqLcu?se=2025-06-23T02%3A47%3A16Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D299%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D569b604a-a9cd-4b15-9ae8-760f9717dad7.webp&sig=p9EV5tELrM5gB6GM20xShjxsm78oYytCXQFsghLAe0Y%3D","Prompt: 'Faça em estilo cartoon'" );
createCard("pamonha.png","pelo ChatGPT","https://br.freepik.com/fotos-premium/delicioso-lanche-de-milho-brasileiro-pamonha-em-fundo-branco_18899671.htm","Prompt: 'Faça em estilo cartoon'" );
createCard("pastel.png","pelo ChatGPT","https://depositphotos.com/br/photos/pastel.html","Prompt: 'Faça em estilo cartoon'" );
createCard("pe-de-moleque.png","pelo ChatGPT","https://www.barracavermelha.com.br/pes-de-moleque/pe-de-moleque-sabor-chocolate-com-amendoim-moido-","Prompt: 'Faça em estilo cartoon'" );
createCard("pescaria.png","pelo ChatGPT","https://pt.pngtree.com/freebackground/silver-fish-on-a-white-background_3631918.html","Prompt: 'Faça em estilo cartoon'" );
createCard("pescaria-maca.png","pelo ChatGPT","https://escolakids.uol.com.br/datas-comemorativas/brincadeiras-juninas.htm","Prompt: 'Faça em estilo cartoon'" );
createCard("pipoca.png","pelo ChatGPT","https://br.freepik.com/fotos-vetores-gratis/pipoca-png","Prompt: 'Faça em estilo cartoon'" );
createCard("quentao.png","pelo ChatGPT","https://br.freepik.com/imagem-ia-premium/vinho-quente-em-fundo-branco-gerado-por-ia_70821512.htm","Prompt: 'Faça em estilo cartoon'" );
createCard("receitas.png","em site", "https://batatais24h.com.br/noticia/1788/veja-7-brincadeiras-de-festa-junina-para-esquentar-e-divertir-neste-inverno");
createCard("relogio.png","em site", "https://www.flaticon.com/br/icone-gratis/relogio_3311693?term=relogio&page=1&position=1&origin=search&related_id=3311693");




