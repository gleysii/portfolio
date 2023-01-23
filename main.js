//selecionando - habilidades
const cardList = document.querySelectorAll('.card');//nodeList
const descriptionList = document.querySelectorAll('.description');//nodeList
const field = document.querySelector('.dynamic-text');
//selecionando - galeria/squares
const squareList = document.querySelectorAll('.square');
const overlayList = document.querySelectorAll('.overlay');

//percorrendo cardList
for(let i = 0; i < cardList.length; i++){
    //elementos recebem seus índices individualmente
    const card = cardList[i];
    const description = descriptionList[i]; 

    card.addEventListener("click", () => {
        field.innerHTML = description.innerHTML;
    });
}

//percorrendo squareList
for(let i = 0; i < squareList.length; i++){
    const square = squareList[i];
    const overlay = overlayList[i];

    square.addEventListener("click", () =>{
        overlay.style.opacity = 0.7;
    })

}




