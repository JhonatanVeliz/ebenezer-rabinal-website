const btn = document.querySelectorAll('.menu-btn');
const nav = document.querySelector('#nav');
const after = document.querySelector('#after--active');

// DELCARACI+ON DE LA FUNCIÓN DEL MENU HAMBURGUESA

const navAppear = ()=>{
    nav.classList.toggle('header__nav--links-active');
    after.classList.toggle('after--active')
};


// INVOCACIÓN DE VALORES
btn.forEach(element => {
    element.addEventListener('click', navAppear);
});

after.addEventListener('click', navAppear)
