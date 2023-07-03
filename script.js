$(document).ready(function () {
  $(".menu-icon").click(function () {
    if ($("#navigator").css("right") == "-270px") {
      $("#navigator").animate({ right: "0px" }, 350);
      // $(".menu-icon").animate({ right: "200px !important" }, 350);
      $("#dark").css("display", "block");

      var scrollPosition = [
        self.pageXOffset ||
          document.documentElement.scrollLeft ||
          document.body.scrollLeft,
        self.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop,
      ];
      var html = jQuery("html"); // it would make more sense to apply this to body, but IE7 won't have that
      html.data("scroll-position", scrollPosition);
      html.data("previous-overflow", html.css("overflow"));
      html.css("overflow", "hidden");
      window.scrollTo(scrollPosition[0], scrollPosition[1]);
    } else {
      $("#navigator").animate({ right: "-270px" }, 350);
      $(this).animate({ right: "0px" }, 350);
      $("#dark").css("display", "none");

      var html = jQuery("html");
      var scrollPosition = html.data("scroll-position");
      html.css("overflow", html.data("previous-overflow"));
      window.scrollTo(scrollPosition[0], scrollPosition[1]);
    }
  });

  $(".menu-icon").click(function () {
    $(this).toggleClass("on");
  });
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 1) {
    $(".header-top").addClass("fixed");
  } else {
    $(".header-top").removeClass("fixed");
  }
});
