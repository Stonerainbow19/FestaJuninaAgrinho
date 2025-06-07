let fontSize = 1;

const btnSum= document.querySelector('#btn-sum-acessibility');
const btnLower = document.querySelector('#btn-lower-acessibility');

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
    console.log(fontSize)
})


