export const smoothScroll = () => {
    const links = document.querySelectorAll('.menu__list-link');

    const arrayLinks = [...links, document.querySelector('.header__scrool-icon')];

    arrayLinks.forEach(link => {
        
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const id = e.target.closest('a').getAttribute('href').substring(1);
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
    
};

