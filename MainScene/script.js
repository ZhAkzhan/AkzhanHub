document.addEventListener("DOMContentLoaded", function () {
    console.log("AkzhanHub is loaded!");

    // Добавим динамическое изменение цвета заголовка при клике
    document.querySelector(".headtext").addEventListener("click", function () {
        this.style.color = this.style.color === "cyan" ? "#e43f5a" : "cyan";
    });
});
