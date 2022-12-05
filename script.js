let show = true; /*show é o menu normal, começa como true*/
/*selecionar dentro do DOM*/
const menuSection = document.querySelector(".top-nav");
const menuToggle = document.querySelector(".menu-toggle");

/*função de clique*/
menuToggle.addEventListener("click", () => {
    // document.body.style.overflow =  show ? "initial" : "hidden" /*se o show for verdadeiro, display hidden, se não, colocar initial*/
    menuSection.classList.toggle("on", show)/*o toggle adiciona e tira o valor mencionado*/
    show = !show; /*se for um valor, vai receber o valor oposto quando for clicado*/
})
