export const smoothScroll = () => {
    const links = document.querySelectorAll('.menu__list-link');

    const arrayLinks = [...links, document.querySelector('.header__icon')];

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

export const burgerMenu = () => {
    
};

