window.onload = ()=>{
    let loading = document.querySelector('#loading');
    let body    = document.querySelector('#body');

    loading.style.opacity = '0';
    loading.style.transform = 'translateX(-150%)';

    body.classList.remove('hidden');
};
