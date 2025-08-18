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

// Start FAQs
const buttons = document.querySelectorAll(".displayAnswer");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const row = btn.closest(".row");
    const answer = row.querySelector(".answer");

    document.querySelectorAll(".row").forEach((el) => {
      if (el !== row) {
        el.classList.remove("colorWhite");
        el.querySelector(".answer").classList.add("hide");
        el.querySelector(".displayAnswer").textContent = "+";
      }
    });

    const isHidden = answer.classList.contains("hide");
    answer.classList.toggle("hide");
    row.classList.toggle("colorWhite", isHidden);
    btn.textContent = isHidden ? "-" : "+";
  });
});
// End FAQs
