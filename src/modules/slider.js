export const slider = () => {
    const sliderSlides = document.querySelectorAll('.slider-blog__slide');
    const sliderPagination = document.querySelector('.slider-pagination');
    const dots = document.querySelectorAll('.dot');

    let currentSlide = 0;
    let idInterval;
    let timeInterval = 2000;

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    };
    
    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    };

    const autoSlide = () => {
        prevSlide(sliderSlides, currentSlide, 'slider-blog__slide--active');
        prevSlide(dots, currentSlide, 'dot--active');
        
        currentSlide++;

        if(currentSlide >= sliderSlides.length) currentSlide = 0;
        
        nextSlide(dots, currentSlide, 'dot--active');
        nextSlide(sliderSlides, currentSlide, 'slider-blog__slide--active');
    }; 

    const startSlide = (time) => {
        idInterval = setInterval(autoSlide, time);
    };

    const stopSlide = () => {
        clearInterval(idInterval);
    };

    sliderPagination.addEventListener('click', (e) => {
        if(e.target.classList.contains('dot')) {
            prevSlide(sliderSlides, currentSlide, 'slider-blog__slide--active');
            prevSlide(dots, currentSlide, 'dot--active');
            
            dots.forEach((dot, index) => {
                if(e.target === dot) {
                    currentSlide = index;
                }
            });

            nextSlide(dots, currentSlide, 'dot--active');
            nextSlide(sliderSlides, currentSlide, 'slider-blog__slide--active');
        }
    });

    sliderPagination.addEventListener('mouseenter', (e) => {
        if(e.target.classList.contains('dot')) {
            stopSlide();
        }
    }, true);

    sliderPagination.addEventListener('mouseleave', (e) => {
        if(e.target.classList.contains('dot')) {
            startSlide(timeInterval);
        }
    }, true);


    startSlide(timeInterval);
};