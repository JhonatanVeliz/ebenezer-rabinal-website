// Obtención de variables

const form      = document.querySelector('#form');
const btnSubmit = document.querySelector('#submit');
const inputName = document.querySelector('#name');
const message   = document.querySelector('#message');
const alerta    = document.querySelector('#alert');

// Declaración de funciones

// función que previene el evento submit
const eventSubmit = (e)=>{
    e.preventDefault();
};

const messageSend = ()=>{

    const phone = 50670910;

    let nombre  = inputName.value;
    let mensaje = message.value;

    const url = `https://api.whatsapp.com/send?phone=${phone}&text=
    *_Ebenezer Rabinal Contacto_*%0A
    *_${nombre} Desea comunicarse_*%0A%0A
    *Nombre: ${nombre}*%0A%0A
    *Peticion: ${mensaje}*%0A`;

    window.open(url);

};

const messageError = ()=>{
    alerta.classList.add('text--active');

    setTimeout( ()=>{
        alerta.classList.remove('text--active');
    }, 5000);
};

// Invocación de funciones


btnSubmit.addEventListener('click', ()=>{
    if(inputName.value === '' || message.value ==="" && inputName.value || message.value < 5){
        messageError();
        form.addEventListener('submit', eventSubmit);
        return;
    }else{
        messageSend();
        return;
    };
});



