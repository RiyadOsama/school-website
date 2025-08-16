$(".button").click(function () {
  $(".button").removeClass("active");
  $(this).toggleClass("active");
});
$("#btn").click(function () {
  $(".options").toggleClass("show-options");
});
