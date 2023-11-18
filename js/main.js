
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    navText: [
      "<img src='../images/home/prev.svg'/>",
      "<img src='../images/home/next.svg'/>",
    ],
      responsive: {
          1116: {
            items:3,
          },
          980: {
              items:2,
          },
          600: {
              items:1,
          },
      0: {
        items: 1,
        },
        
    },
  });
});

