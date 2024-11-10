const swiper = new Swiper(".swiper-container", {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    slidesPerView: 1, // Padrão: 3 slides
    spaceBetween: 20,
    centeredSlides: false,
    breakpoints: {
        // Quando a tela tiver 1200px ou menos
        1920: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 3, // 2 slides para telas de 1200px ou menos
        },
        // Quando a tela tiver 768px ou menos
        800: {
            slidesPerView: 2, // 1 slide para telas de 768px ou menos
        }
    }
});

document.querySelector(".open-menu").onclick = function () {
    document.documentElement.classList.add("active-menu")
}

document.querySelector(".close-menu").onclick = function () {
    document.documentElement.classList.remove("active-menu")
}