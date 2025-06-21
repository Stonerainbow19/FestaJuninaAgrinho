const headerContent = `
        <a href="../../index.html"><img src="/src/assets/img/logo1.png" alt="logo" id="logo"></a>

        <div class="a-wrapper-header">
            <a href="../../index.html" aria-label="">Página inicial</a>
            <a href="/src/pages/brincadeiras.html" aria-label="">Brincadeiras</a>
            <a href="/src/pages/receitas.html" aria-label="">Receitas</a>
            <a href="/src/pages/references.html" aria-label="">Referências</a>
            <button class="btn-header btn-header-accessibility" id="btn-sum-acessibility">Aa +</button>
            <button class="btn-header btn-header-accessibility" id="btn-lower-acessibility">Aa -</button>
            <button class="btn-header" id="btn-redefine-acessibility">Redefinir</button>
           
        </div>
`

const footerContent = `<p>@2025 | Concurso Agrinho: Programação | Festejando a conexão campo-cidade | Todos os direitos reservados.</p>`

const header = document.getElementById("headerId");
const footer = document.getElementById("footerId");



header.innerHTML = headerContent;
footer.innerHTML = footerContent;


// Acessibilidade - Acessibility
let fontSize = 1;

const btnSum= document.querySelector('#btn-sum-acessibility');
const btnLower = document.querySelector('#btn-lower-acessibility');
const btnRedefine = document.querySelector('#btn-redefine-acessibility')

btnSum.addEventListener("click", ()=>{
    fontSize += 0.25;
    document.body.style.fontSize = fontSize+'rem';
}
)

btnLower.addEventListener("click", ()=>{
    fontSize -= 0.25;
    if(fontSize <= 0){
        fontSize = 0.25;
    }
    document.body.style.fontSize = fontSize+'rem';
})

btnRedefine.addEventListener("click", ()=>{
    fontSize = 1;
    document.body.style.fontSize = fontSize+'rem';
})
