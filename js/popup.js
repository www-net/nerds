const link = document.querySelector(".js-write_us-button");
const popup = document.querySelector(".modal-write_us");
const login = popup.querySelector("[name=login]");
const close = document.querySelector(".modal-close");

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
    if (evt.key == "Escape") {
        if (popup.classList.contains("modal-show")) {
            evt.preventDefault();
            popup.classList.remove("modal-show");
        }
    }
});
