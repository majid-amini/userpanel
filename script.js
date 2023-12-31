$(document).ready(function () {
  $(".menu-icon").click(function () {
    if ($("#navigator").css("right") == "-270px") {
      $("#navigator").animate({ right: "0px" }, 350);
      // $(".menu-icon").animate({ right: "200px !important" }, 350);
      $("#dark").css("display", "block");
      $(".menu-icon div").addClass("bg-white");
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
      $(".menu-icon div").removeClass("bg-white");
      var html = jQuery("html");
      var scrollPosition = html.data("scroll-position");
      html.css("overflow", html.data("previous-overflow"));
      window.scrollTo(scrollPosition[0], scrollPosition[1]);
    }
  });

  $(".menu-icon").click(function () {
    $(this).toggleClass("on");
  });

  $(".name__edit__icon").click(function () {
    $(".modal__name").removeClass("d-none");
    $("#modal__dark").css("display", "block");
  });

  $(".edit__icon").click(function () {
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
  });
  $(".delete__icon").click(function () {
    var html = jQuery("html");
    var scrollPosition = html.data("scroll-position");
    html.css("overflow", html.data("previous-overflow"));
    window.scrollTo(scrollPosition[0], scrollPosition[1]);
  });
  $(".fa-circle-xmark").click(function () {
    $(".modal__name").addClass("d-none");
    $("#modal__dark").css("display", "none");
  });

  $(".nationalCode__edit__icon").click(function () {
    $(".modal__name").removeClass("d-none");
    $("#modal__dark").css("display", "block");
  });

  $(".mobile__edit__icon").click(function () {
    $(".mobile__modal").removeClass("d-none");
    $("#modal__dark").css("display", "block");
  });
  $(".fa-circle-xmark").click(function () {
    $(".mobile__modal").addClass("d-none");
    $("#modal__dark").css("display", "none");
  });

  $(".mail__edit__icon").click(function () {
    $(".mail__modal").removeClass("d-none");
    $("#modal__dark").css("display", "block");
  });
  $(".fa-circle-xmark").click(function () {
    $(".mail__modal").addClass("d-none");
    $("#modal__dark").css("display", "none");
  });

  $(".password__icon").click(function () {
    $(".password__modal").removeClass("d-none");
    $("#modal__dark").css("display", "block");
  });
  $(".fa-circle-xmark").click(function () {
    $(".password__modal").addClass("d-none");
    $("#modal__dark").css("display", "none");
  });
  $(".birth__date__icon").click(function () {
    $(".birth__date__modal").removeClass("d-none");
    $("#modal__dark").css("display", "block");
  });
  $(".fa-circle-xmark").click(function () {
    $(".birth__date__modal").addClass("d-none");
    $("#modal__dark").css("display", "none");
  });
  $(".job__icon").click(function () {
    $(".job__modal").removeClass("d-none");
    $("#modal__dark").css("display", "block");
  });
  $(".fa-circle-xmark").click(function () {
    $(".job__modal").addClass("d-none");
    $("#modal__dark").css("display", "none");
  });

 
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 1) {
    $(".header-top").addClass("fixed");
  } else {
    $(".header-top").removeClass("fixed");
  }
});
