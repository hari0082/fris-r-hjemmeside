// Galleri slider

/* globale variabler */
// DOM elementer
const slides = document.querySelectorAll(".slide")
const dots = document.querySelectorAll(".dot")
let slideIndex = 1

/* initial function call on pageload */
showSlides(slideIndex)

/* automatisk slider */
window.setInterval(function(){
    showSlides(slideIndex += 1)
}, 5000)

/* Funktioner */
// click handler for prev & next
function plusSlides(num){
    showSlides(slideIndex += num)

}

// click handler for dots
function currentSlide(num){
    showSlides(slideIndex = num)

}

/* main function */

function showSlides(num){
    if (num > slides.length){
        slideIndex = 1
    }
    if (num < 1){
        slideIndex = slides.length
    }

    slides.forEach(function(element, index){
        element.style.display = "none"

    })

    slides[slideIndex -1].style.display = "block"
    dots[slideIndex -1].classList.add("active")

    dots.forEach(function(element){
        element.classList.remove("active")
    })

}
