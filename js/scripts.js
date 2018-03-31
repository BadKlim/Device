
let map_link = document.querySelector(".map-link");
let modal_map = document.querySelector(".modal-map");
let close_link_modal_map = modal_map.querySelector(".modal-close");

map_link.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal_map.classList.add("modal-show");
});

close_link_modal_map.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal_map.classList.remove("modal-show");
});

let contacts_link = document.querySelector(".contacts-link");
let modal_wtite_us = document.querySelector(".modal-wtite-us");
let close_link_modal_wtite_us = modal_wtite_us.querySelector(".modal-close");
let input_name = modal_wtite_us.querySelector("[name=name]");

contacts_link.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal_wtite_us.classList.add("modal-show");
    input_name.focus();
});

close_link_modal_wtite_us.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal_wtite_us.classList.remove("modal-show");
    modal_wtite_us.classList.remove("modal-error");
});

let form = modal_wtite_us.querySelector("form");
let name = form.querySelector("[name=name]");
let email = form.querySelector("[name=email]");
let letter = form.querySelector("[name=letter]");

form.addEventListener("submit", function (evt) {
    if (!name.value || !email.value || !letter.value) {
        evt.preventDefault();
        modal_wtite_us.classList.add("modal-error");
    }
});
    
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        modal_map.classList.remove("modal-show");
        modal_wtite_us.classList.remove("modal-show");
        modal_wtite_us.classList.remove("modal-error");
    }
});