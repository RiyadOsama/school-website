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




/****************Start FAQs Section***********************/
const buttons = document.querySelectorAll(".displayAnswer");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".item");
    const answer = item.querySelector(".answer");

  
    document.querySelectorAll(".item").forEach((el) => {
      if (el !== item) {
        el.classList.remove("colorWhite");
        el.querySelector(".answer").classList.add("hide");
        el.querySelector(".displayAnswer").textContent = "+";
      }
    });

    
    const isHidden = answer.classList.contains("hide");
    answer.classList.toggle("hide");
    item.classList.toggle("colorWhite", isHidden);
    btn.textContent = isHidden ? "-" : "+";
  });
});

/****************end FAQs Section***********************/


