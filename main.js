//selecionando 
const cardList = document.querySelectorAll('.card');//nodeList
const descriptionList = document.querySelectorAll('.description');//nodeList
const field = document.querySelector('.dinamic-text');

for(let i = 0; i < cardList.length; i++){
    //elementos recebem seus índices individualmente
    const card = cardList[i];
    const description = descriptionList[i]; 

    //a função
    function showDescription(){
        field.innerHTML = description.innerHTML;
    }
 
    //colocando função anonima - que chama outra função dentro - num evento de click
    card.onclick = function(){
        showDescription(description);
    }
}

