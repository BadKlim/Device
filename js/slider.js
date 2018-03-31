let slider_top = document.querySelector(".slider-top");
let slides_switches = slider_top.querySelector(".slides-switches");

slides_switches.addEventListener("click", function (evt) {
    evt.preventDefault();

    let old_slide = slider_top.querySelector(".slide-visible");
    let new_slide = slider_top.querySelector('#'+evt.target.dataset.for);
    if(old_slide && new_slide) {
        old_slide.classList.toggle("slide-hidden");
        old_slide.classList.toggle("slide-visible");
        new_slide.classList.toggle("slide-hidden");
        new_slide.classList.toggle("slide-visible");
        let old_button = slides_switches.querySelector(".slide-btn-active");
        old_button.classList.toggle("slide-btn-active");
        evt.target.classList.toggle("slide-btn-active");
    } 
});


let services = document.querySelector(".services");
let services_switches = services.querySelector(".services-switches");

services_switches.addEventListener("click", function (evt) {
    evt.preventDefault();

    let old_slide = services.querySelector(".services-slide-visible");
    let new_slide = services.querySelector('.'+evt.target.dataset.for);
    if(old_slide && new_slide) {
        old_slide.classList.toggle("services-slide-hidden");
        old_slide.classList.toggle("services-slide-visible");
        new_slide.classList.toggle("services-slide-hidden");
        new_slide.classList.toggle("services-slide-visible");
        let old_button = services.querySelector(".btn-services-active");
        old_button.classList.toggle("btn-services-active");
        old_button.classList.toggle("btn");
        evt.target.classList.toggle("btn-services-active");
        evt.target.classList.toggle("btn");
        old_button.parentElement.classList.toggle("services-switches-active");
        evt.target.parentElement.classList.toggle("services-switches-active");
    } 
});