$(document).ready(() => {
    $(() => {
        const width = 180;
        const animatedSpeed = 1000;
        const pause = 1000;
        const currentSlide = 1;

        const $slider = $('.product-cart');
        const $slideContainer = $slider.find('.product-detail');
        const $slides = $slideContainer.find('.image-content');

        setItenval(() => {
            $slideContainer.animate({
                'left': '-=' +width
            }, animatedSpeed, () => {
            currentSlide++;
            if (currentSlide === $slides.length) {
                currentSlide = 1;
                $slideContainer.css('left', 0);
            }
            });
        }, pause);
    })
})