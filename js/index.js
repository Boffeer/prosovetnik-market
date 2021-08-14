$(document).ready(function () {
  $(".market-reviews-slider").slick({
    centerMode: true,
    slidesToShow: 1,
    infinite: true,
    dots: true,
    arrows: true,
  });
  $(".market-reviews-slider").on("beforeChange", function () {
    var currentSlide = $(this).slick("slickCurrentSlide") + 1;
    var nextSlide = currentSlide + 1;
    var prevSlide = currentSlide - 1;

    // $(".market-reviews-slider-slide--next").removeClass(
    //   "market-reviews-slider-slide--next"
    // );
    // $(".market-reviews-slider-slide--prev").removeClass(
    //   "market-reviews-slider-slide--prev"
    // );

    // $(".market-reviews-slider-slide.slick-current")
    //   .next()
    //   .addClass("market-reviews-slider-slide--next");
    // $(".market-reviews-slider-slide.slick-current")
    //   .prev()
    //   .addClass("market-reviews-slider-slide--prev");

    // $('.market-reviews-slider-slide[data-slick-index="' + nextSlide + '"]'
    // ).addClass("market-reviews-slider-slide--next");
    // $(
    //   '.market-reviews-slider-slide[data-slick-index="' + prevSlide + '"]'
    // ).addClass("market-reviews-slider-slide--prev");
    console.log(prevSlide, currentSlide, nextSlide);
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
            console.log(dropDownBottomClassName);
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
});
