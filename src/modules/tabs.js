export const tabs = () => {
    const galleryNav = document.querySelector('.gallery__nav');
    const galleryItems = document.querySelectorAll('.gallery__item');

    galleryNav.addEventListener('click', (e) => {

        if(e.target.classList.contains('gallery__btn')) {   
            if(e.target.dataset.tab === 'all') return removeClassHidden(galleryItems);
 
            const tabItems = document.querySelectorAll(`[data-tabBlock=${e.target.dataset.tab}]`);

            addClassHidden(galleryItems);
            removeClassHidden(tabItems);
        }
        
    });

    const removeClassHidden = (items) => {
        items.forEach(item => {
            item.classList.remove('hidden');
        });
    };

    const addClassHidden = (items) => {
        items.forEach(item => {
            item.classList.add('hidden');
        });
    };

};