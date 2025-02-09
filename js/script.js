let btnNext = document.querySelector('.next')
let btnBack = document.querySelector('.back')

let container = document.querySelector('.container')
let list = document.querySelector('.container .list')
let thumg = document.querySelector('.container .thumb')

btnNext.onclick = () => moveItemsClick('next')
btnBack.onclick = () => moveItemsClick('back')

function moveItemsClick(type) {
    let listItems = document.querySelectorAll('.list .list-item')  // Corrigido
    let thumbItems = document.querySelectorAll('.thumb .thumb-item')  // Corrigido

    if (type === 'next') {
        list.appendChild(listItems[0])
        thumg.appendChild(thumbItems[0])
        container.classList.add('next')
    } else {
        list.prepend(listItems[listItems.length - 1])  // Corrigido para pegar o último item
        thumg.prepend(thumbItems[thumbItems.length - 1])  // Corrigido para pegar o último item
        container.classList.add('back')
    }
}

setTimeout(() => {
    container.classList.remove('next') // Removendo a class depois da animação
    container.classList.remove('back')
},3000)



let isAnimating = false;

function handleBackClick() {
    if (isAnimating) return; // Impede cliques rápidos consecutivos
    isAnimating = true;

    // Adiciona a classe "back" para iniciar a animação
    document.querySelector('.container').classList.add('back');

    // Define o tempo de duração da animação, para remover a classe "back" depois
    setTimeout(() => {
        document.querySelector('.container').classList.remove('back');
        isAnimating = false; // Permite um novo clique
    }, 500); // 500ms = duração da animação
}

// Supondo que você tenha um botão para disparar o evento
document.querySelector('.back-button').addEventListener('click', handleBackClick);
