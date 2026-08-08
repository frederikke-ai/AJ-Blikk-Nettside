document.querySelectorAll("[data-carousel]").forEach(function (carousel) {
  var track = carousel.querySelector("[data-carousel-track]");
  if (!track) return;
  carousel.querySelectorAll("[data-carousel-prev]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      track.scrollBy({ left: -track.clientWidth * 0.8, behavior: "smooth" });
    });
  });
  carousel.querySelectorAll("[data-carousel-next]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      track.scrollBy({ left: track.clientWidth * 0.8, behavior: "smooth" });
    });
  });
});
