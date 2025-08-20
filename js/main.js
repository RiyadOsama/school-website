// Start Header
// Toggle Active Class To The Navbar
$(".button").click(function () {
  $(".button").removeClass("active");
  $(this).toggleClass("active");
});
$("#btn").click(function () {
  $(".options").toggleClass("show-options");
});
// End Header


// Start Testimonials

  

$(document).ready(function(){
  $(".testimonials-carousel").owlCarousel({
    loop: true,          
    margin: 20,           
    nav: true,            
    dots: true,     
    autoplay: false,     
    autoplayTimeout: 3000, 
    responsive: {
      0: {
        items: 1, 
        nav: true
      },
      768: {
        items: 2,  
        nav: true
      },
      992: {
        items: 3, 
        nav: true
      }
    }
,

    navText: [
      '<button><i class="fa-solid fa-arrow-left"></i></button></i>', 
      '<button><i class="fa-solid fa-arrow-right"></i></button></i>'  
    ]
 
  });

});
// End Testimonials

// Start FAQs
const buttons = document.querySelectorAll(".displayAnswer");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const faqItem = btn.closest(".faq-item");
    const answer = faqItem.querySelector(".answer");

    document.querySelectorAll(".faq-item").forEach((el) => {
      if (el !== faqItem) {
        el.classList.remove("colorWhite");
        el.querySelector(".answer").classList.add("hide");
        el.querySelector(".displayAnswer").textContent = "+";
      }
    });

    const isHidden = answer.classList.contains("hide");
    answer.classList.toggle("hide");
    faqItem.classList.toggle("colorWhite", isHidden);
    btn.textContent = isHidden ? "-" : "+";
  });
});
// End FAQs
