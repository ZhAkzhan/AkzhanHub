document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.style.background = "rgba(15, 15, 15, 0.8)";
        } else {
            header.style.background = "rgba(15, 15, 15, 0.9)";
        }
    });

    // Аудиоплеер без бордеров с автоплеем
    const audio = document.querySelector(".audio-player");
    audio.volume = 0.5; // Установил громкость на 50%
});
