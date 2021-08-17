$(document).ready(function () {
  $(document).on("click", 'a[href^="#"]', function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      500
    );
  });

  $(".market-reviews-slider").slick({
    centerMode: true,
    slidesToShow: 1,
    infinite: true,
    dots: true,
    arrows: true,
    speed: 900,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          centerMode: false,
          //   adaptiveHeight: false,
          speed: 300,
        },
      },
    ],
  });

  /**
   * Slick mobile adaptive height fixer
   *
   */

  if (window.innerWidth <= 1200) {
    function fixSliderHeight() {
      var currentHeight = $(
        ".market-reviews-slider .slick-current .market-reviews-slider-slide__inner"
      ).height();
      currentHeight += 70;
      $(".market-reviews-slider .slick-track").height(currentHeight);
      $(".market-reviews-slider").height(currentHeight);
      $(".market-reviews-slider .slick-list.draggable").height(currentHeight);
      $(".market-reviews-slider-slide.slick-slide").height(currentHeight);
    }
    $(".market-reviews-slider").on("afterChange", function () {
      fixSliderHeight();
    });
    fixSliderHeight();
  }

  /**
   * Opacity effect and offset for next and prev slides
   */
  $(".market-reviews-slider").on("beforeChange", function () {
    var currentSlide = $(this).slick("slickCurrentSlide") + 1;
    var nextSlide = currentSlide + 1;
    var prevSlide = currentSlide - 1;
    setTimeout(function () {
      $(".market-reviews-slider-slide--next").removeClass(
        "market-reviews-slider-slide--next"
      );
      $(".market-reviews-slider-slide--prev").removeClass(
        "market-reviews-slider-slide--prev"
      );

      $(".market-reviews-slider-slide.slick-current")
        .next()
        .addClass("market-reviews-slider-slide--next");
      $(".market-reviews-slider-slide.slick-current")
        .next()
        .next()
        .addClass("market-reviews-slider-slide--next");
      $(".market-reviews-slider-slide.slick-current")
        .prev()
        .addClass("market-reviews-slider-slide--prev");
      $(".market-reviews-slider-slide.slick-current")
        .prev()
        .prev()
        .addClass("market-reviews-slider-slide--prev");
    }, 100);
    // console.log(prevSlide, currentSlide, nextSlide);
  });
  $('.market-reviews-slider-slide[data-slick-index="-1"]').addClass(
    "market-reviews-slider-slide--prev"
  );
  $('.market-reviews-slider-slide[data-slick-index="1"]').addClass(
    "market-reviews-slider-slide--next"
  );

  $(".market-pricing-table").slick({
    infinite: false,
    dots: true,
    arrows: true,
    adaptiveHeight: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 576,
        settings: "unslick",
      },
    ],
  });

  /*
  	Toggle Dropdown
   */
  function handleDropdown(dropdownsClassesArray) {
    dropdownsClassesArray.map(function (dropdownItemClass) {
      $(dropdownItemClass).each(function () {
        $(this).on("click", function () {
          var parentClassList = $(this).parent().attr("class");
          if (parentClassList.includes("--opened")) {
            // .removeClass(dropdownItemClass + '--opened");'
            var dropDownBottomClassName = $(this)
              .parent()
              .children()[1]
              .getAttribute("class");
            $(this)
              .parent()
              .find("." + dropDownBottomClassName)
              .slideUp();
            $(this)
              .parent()
              .removeClass(
                dropdownItemClass.replace(".", "").replace("-top", "") +
                  "--opened"
              );
          } else {
            var dropDownBottomClassName = $(this)
              .parent()
              .children()[1]
              .getAttribute("class");
            $(this)
              .parent()
              .find("." + dropDownBottomClassName)
              .slideDown();
            $(this)
              .parent()
              .addClass(
                dropdownItemClass.replace(".", "").replace("-top", "") +
                  "--opened"
              );
          }
        });
      });
    });
  }

  const dropdownsClassesArray = [
    ".market-programm-dropdowns-dropdown-top",
    ".market-faq-dropdowns-dropdown-top",
  ];
  handleDropdown(dropdownsClassesArray);

  /**
   * Popups
   */

  poppa({
    pop: ".market-popups-callback",
    clickTrigger: ".market-header__btn",
    animation: "slide-down",
    closerType: "outer",
  });

  poppa({
    pop: ".market-popups-bundle--standard",
    clickTrigger: ".market-pricing-table-bundle__enroll--standard",
    closerType: "outer",
  });
  poppa({
    pop: ".market-popups-bundle--base",
    clickTrigger: ".market-pricing-table-bundle__enroll--base",
    closerType: "outer",
  });
  poppa({
    pop: ".market-popups-thanks",
    // clickTrigger: ".market-popups-thanks",
    closerType: "outer",
  });
});
