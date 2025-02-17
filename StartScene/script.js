document.addEventListener("DOMContentLoaded", function () {
    let body = document.body;
    let colors = ["#0f0", "#005500", "#002200"];
    let index = 0;

    function changeBackground() {
        body.style.background = `linear-gradient(90deg, #000 0%, ${colors[index]} 50%, #000 100%)`;
        index = (index + 1) % colors.length;
    }

    setInterval(changeBackground, 1500);
});
