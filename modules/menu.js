
function open() {
    document.querySelector(".inf").classList.add("active");
    document.querySelector(".burger-menu").classList.add("active");
}
document.querySelector(".burger-menu").addEventListener("click", () => {
    open();
});
