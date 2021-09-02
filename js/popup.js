var link = document.querySelector(".js-write_us-button");
var popup = document.querySelector(".modal-write_us");
var login = popup.querySelector("[name=login]")
var close = document.querySelector(".modal-close");

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    login.focus();
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
            evt.preventDefault();
            popup.classList.remove("modal-show");
        }
    }
});