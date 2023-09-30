const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', ()=>{
    navbarLinks.classList.toggle('active')
})

const slider = document.querySelector(".slider");
const slides = document.querySelector(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let slideIndex ="0";
slides[slideIndex].classList.add('active');
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

function prevSlide(){
    slides[slideIndex].classList.remove('active');
    slideIndex = (slideIndex === 0) ? slides.length -1 : slideIndex -1 ;
    slides[slideIndex].classList.add('active')
    slider.style.transform ='translateX(-${slideIndex * 100}%)'
}