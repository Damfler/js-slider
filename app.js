const slides = document.querySelectorAll('.slide')

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