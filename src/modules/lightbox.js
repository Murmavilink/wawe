export const lightbox = () => {
    const galleryItems = document.querySelectorAll('.gallery__item');
    const modalLightbox = document.querySelector('.modal-lightbox');

    const showImage = (path) => {
        modalLightbox.classList.add('modal-lightbox--show');
        modalLightbox.innerHTML = '';

        modalLightbox.insertAdjacentHTML('beforeend', `<img class="modal-lightbox__image" src="${path}" alt="image">`);
    };

    galleryItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            showImage(e.target.closest('a').getAttribute('href'));
        });
    });


    modalLightbox.addEventListener('click', (e) => {
        if (!e.target.closest('.modal-lightbox__image')) modalLightbox.classList.remove('modal-lightbox--show');
    });
};