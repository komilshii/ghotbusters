$(document).ready(function () {
  const mMenu = $(".m-menu");
  const mobilMenu = $(".mobil-menu");
  const tab = $(".tab");

  mMenu.on("click", function () {
    mobilMenu.toggleClass("active");
    $("body").toggleClass("no-scrolle");
  });

  tab.on("click", function () {
    tab.removeClass("bold");
    $(this).toggleClass("bold");
    let boldTabContent = $(this).attr("data-target");

    $(".tabs-content").removeClass("visible");

    $(boldTabContent).toggleClass("visible");
    console.log(this);
  });

  var mySwiper = new Swiper(".swiper-container", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    breakpoints: {
      991: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 2,
      },
      321: {
        slidesPerView: 1,
        navigation: {
          nextEl: ".button-next",
        },
      },
    },
  });
});
