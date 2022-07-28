$(document).ready(function () {
  setTimeout(function () {
    $(".loader-bg").fadeOut();
    $(".loader").fadeOut();
  }, 2000);
});

$(".center").slick({
  centerMode: true,
  centerPadding: "0px",
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});

$(".our-news").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
$(".guardian-feedback").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
$(".report-radios input").change(function () {
  if ($(".others-radio").is(":checked")) {
    $(".reviewArea").removeClass("d-none");
  } else {
    $(".reviewArea").addClass("d-none");
  }
});

$("body").on("hidden.bs.modal", ".modal", function () {
  $("video").trigger("pause");
});

var a = Array.from(document.querySelectorAll(".comment-btn"));

a.forEach((com) => {
  com.addEventListener("click", function () {
    var b = Array.from(com.closest(".accordion-body").children);
    b.forEach((el) => {
      if (el.classList.contains("comment-box")) {
        el.classList.toggle("d-none");
      }
    });
  });
});

var comment2 = Array.from(document.querySelectorAll(".comment-btn-2"));

comment2.forEach((com) => {
  com.addEventListener("click", function () {
    var c = Array.from(com.closest(".accordion-body").children);
    c.forEach((el) => {
      if (el.classList.contains("comment-box-bg")) {
        el.classList.toggle("d-none");
      }
    });
  });
});
// modal hide one modal show next one
$("#pwd1-btn").click(function () {
  $("#pwdrecovery1").modal("hide");
  $("#pwdrecovery2").modal("show");
});

// modal hide one modal show next one
$("#pwd2-btn").click(function () {
  $("#pwdrecovery2").modal("hide");
  $("#pwdrecovery3").modal("show");
});

// show password on eye icon click
$(".confirm-icon").click(function () {
  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $(".confirm-input");
  if (input.attr("type") === "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

// show password on eye icon click
$(".enter-icon").click(function () {
  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $(".enter-input");
  if (input.attr("type") === "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

// show password on eye icon click
$(".current-icon").click(function () {
  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $(".current-input");
  if (input.attr("type") === "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function () {
  if (animating) return false;
  animating = true;

  current_fs = $(this).parent();
  next_fs = $(this).parent().next();

  //activate next step on progressbar using the index of next_fs
  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

  //show the next fieldset
  next_fs.show();
  //hide the current fieldset with style
  current_fs.animate(
    {
      opacity: 0,
    },
    {
      step: function (now, mx) {
        //as the opacity of current_fs reduces to 0 - stored in "now"
        //1. scale current_fs down to 80%
        scale = 1 - (1 - now) * 0.2;
        //2. bring next_fs from the right(50%)
        left = now * 50 + "%";
        //3. increase opacity of next_fs to 1 as it moves in
        opacity = 1 - now;
        current_fs.css({
          transform: "scale(" + scale + ")",
          position: "absolute",
        });
        next_fs.css({
          left: left,
          opacity: opacity,
        });
      },
      duration: 800,
      complete: function () {
        current_fs.hide();
        animating = false;
      },
      //this comes from the custom easing plugin
      easing: "easeInOutBack",
    }
  );
});

$(".previous").click(function () {
  if (animating) return false;
  animating = true;

  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();

  //de-activate current step on progressbar
  $("#progressbar li")
    .eq($("fieldset").index(current_fs))
    .removeClass("active");

  //show the previous fieldset
  previous_fs.show();
  //hide the current fieldset with style
  current_fs.animate(
    {
      opacity: 0,
    },
    {
      step: function (now, mx) {
        //as the opacity of current_fs reduces to 0 - stored in "now"
        //1. scale previous_fs from 80% to 100%
        scale = 0.8 + (1 - now) * 0.2;
        //2. take current_fs to the right(50%) - from 0%
        left = (1 - now) * 50 + "%";
        //3. increase opacity of previous_fs to 1 as it moves in
        opacity = 1 - now;
        current_fs.css({
          left: left,
        });
        previous_fs.css({
          transform: "scale(" + scale + ")",
          opacity: opacity,
        });
      },
      duration: 800,
      complete: function () {
        current_fs.hide();
        animating = false;
      },
      //this comes from the custom easing plugin
      easing: "easeInOutBack",
    }
  );
});

function showCard() {
  $(".card-details").removeClass("d-none");
}

function removeCard() {
  $(".card-details").addClass("d-none");
}

function editBilling() {
  $(this).hide;
  $(".address-text").addClass("d-none");
  $(".billing-address").removeClass("d-none");
}

$(".submit").click(function () {
  return false;
});

function increaseValue() {
  var value = parseInt(document.getElementById("number").value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("number").value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById("number").value, 10);
  value = isNaN(value) ? 0 : value;
  value == 1 ? "" : value--;
  // value--;
  document.getElementById("number").value = value;
}

$(document).ready(function () {
  setTimeout(function () {
    $(".preloader").fadeOut(100);
  }, 1000);
});

$(".course-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  center: false,
  responsive: {
    0: {
      items: 1,
      stagePadding: 0,
    },

    520: {
      items: 1,
      stagePadding: 100,
    },
    1000: {
      items: 2,
      stagePadding: 100,
    },
    1400: {
      items: 3,
      stagePadding: 100,
    },
  },
});

$(".popular-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<span class='nav-arrow'><i class='fas fa-caret-left'></i></span>",
    "<span class='nav-arrow'><i class='fas fa-caret-right'></i></span>",
  ],
  dots: false,
  center: false,
  responsive: {
    0: {
      items: 1,
      stagePadding: 0,
    },

    520: {
      items: 2,
      stagePadding: 100,
    },
    1000: {
      items: 3,
      stagePadding: 100,
    },
    1400: {
      items: 4,
      stagePadding: 150,
    },
  },
});

$(".product-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  center: false,
  responsive: {
    0: {
      items: 1,
      stagePadding: 0,
    },

    520: {
      items: 1,
      stagePadding: 100,
    },
    1000: {
      items: 2,
      stagePadding: 100,
    },
    1400: {
      items: 3,
      stagePadding: 100,
    },
  },
});
$(".testimonial-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
$(".reviews-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
});
$(".reviews-carousel-2").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1200: {
      items: 4,
    },
  },
});
$(".user-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});
$(".cart-custom").on("click", function (event) {
  var events = $._data(document, "events") || {};
  events = events.click || [];
  for (var i = 0; i < events.length; i++) {
    if (events[i].selector) {
      //Check if the clicked element matches the event selector
      if ($(event.target).is(events[i].selector)) {
        events[i].handler.call(event.target, event);
      }

      // Check if any of the clicked element parents matches the
      // delegated event selector (Emulating propagation)
      $(event.target)
        .parents(events[i].selector)
        .each(function () {
          events[i].handler.call(this, event);
        });
    }
  }
  event.stopPropagation(); //Always stop propagation
});
//   $breadcrumb-divider: quote(">");

var addBtn = document.querySelector(".add-btn");
var cloneFeild = document.querySelector(".attribute-add");
