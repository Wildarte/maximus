const btn_open_close = document.querySelector('.btn_open_close');
const itens_menu = document.querySelectorAll('.menu_sidebar .nav-item span');
const bag_fat = document.querySelector('.bag_fat');
const nome_app = document.querySelector('.nome_app');
const sidebar = document.querySelector('.sidebar');

btn_open_close.addEventListener('click', () => {

    if(btn_open_close.classList.contains('closed')){

        itens_menu.forEach((item) => {

            item.classList.remove('w-0');

        });

        bag_fat.classList.remove('display-none');
        nome_app.classList.remove('w-0');
        btn_open_close.querySelector('i').classList.replace('bi-caret-right', 'bi-caret-left');
        btn_open_close.classList.remove('closed');

    }else{
        itens_menu.forEach((item) => {

            item.classList.add('w-0');

        });

        bag_fat.classList.add('display-none');
        nome_app.classList.add('w-0');
        btn_open_close.querySelector('i').classList.replace('bi-caret-left', 'bi-caret-right');
        btn_open_close.classList.add('closed');
    }

    
});