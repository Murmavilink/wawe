export const smoothScroll = () => {
    const links = document.querySelectorAll('.menu__list-link');

    const arrayLinks = [...links, document.querySelector('.header__scroll-icon')];

    arrayLinks.forEach(link => {
        
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const id = link.getAttribute('href').substring(1);
            const section = document.getElementById(id);

            if(section) {
                section.scrollIntoView({
                    block: "center", 
                    behavior: "smooth"
                });
            }
   
        });

    });

};

export const addingClassScroll = () => {
    const headerTop = document.querySelector('.header__top');

    window.addEventListener('scroll', () => {
        
        // также можно использовать 
        //document.documentElement.scrollTop
        
        if(window.pageYOffset > 570) {
            headerTop.classList.add('header__top--active');
        } else {
            headerTop.classList.remove('header__top--active');
        }

    });
};


export const burgerMenu = () => {
    const headerInner = document.querySelector('.header__inner');
    const menuList = document.querySelector('.menu__list');
    const menuBtn = document.querySelector('.menu__btn');

    const handlerMenu = () => {
        menuBtn.classList.toggle('menu__btn--active');
        menuList.classList.toggle('menu__list--active');
    };

    headerInner.addEventListener('click', (e) => {
        if(e.target.closest('.menu__btn'))  handlerMenu();
        if(e.target.closest('.menu__list-link')) handlerMenu();
    });

};

