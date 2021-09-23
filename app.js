function slidePlugin(activeSlide = 0) {
    const slides = document.querySelectorAll('.slide')

    slides[activeSlide].classList.add('active')

// way 1
    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClasses()

            slide.classList.add('active')
        })
    }

    function clearActiveClasses() {
        // way 2
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }
}

slidePlugin(4)