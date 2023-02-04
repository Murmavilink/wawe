export const tabs = () => {
    const galleryNav = document.querySelector('.gallery__nav');
    const galleryItems = document.querySelectorAll('.gallery__item');

    galleryNav.addEventListener('click', (e) => {

        if(e.target.classList.contains('gallery__btn')) {   

            const dataTab = e.target.dataset.tab;

            if(dataTab === 'all') return removeClassHidden(galleryItems);

            const tabItems = document.querySelectorAll('.' + dataTab);

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