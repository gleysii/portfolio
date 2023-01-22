//selecionando 
const cardList = document.querySelectorAll('.card');//nodeList
const descriptionList = document.querySelectorAll('.description');//nodeList
const field = document.querySelector('.dynamic-text');

for(let i = 0; i < cardList.length; i++){
    //elementos recebem seus índices individualmente
    const card = cardList[i];
    const description = descriptionList[i]; 

    card.addEventListener("click", () => {
        field.innerHTML = description.innerHTML;
    });
    
}


