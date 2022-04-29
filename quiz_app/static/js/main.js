function openModal() {
    let modal = document.getElementById("home-modal");
    modal.classList.add("is-active");
  }
  function openOptionsCourse() {
    let modal = document.getElementById("category-modal");
    modal.classList.add("is-active");
  }
  function closeModal() {
    let modal = document.querySelectorAll(".modal");
    modal.forEach(elem => {
      elem.classList.remove("is-active");
    });
  }
  function animation() {
    const span_animation = document.querySelectorAll(".animate-hover");
    span_animation.forEach(elem => {
      elem.addEventListener("mouseover", event => {
        event.target.classList.add("animated");
        event.target.classList.add("rubberBand");
        setTimeout(() => {
          event.target.classList.remove("animated");
          event.target.classList.remove("rubberBand");
        }, 1000);
      });
    });
  }
function mobileSlider() {
    const navigation = document.querySelector(".to-top-navigation");
    const slideParent = document.querySelector(".slider-mobile");
    const sliderImage = document.querySelectorAll(
      ".slider-mobile > .card-slide"
    );
    const next_btn = document.querySelector(".next_btn");
    const prev_btn = document.querySelector(".prev_btn");
    let current_slide = 0;
    let slideWidth = sliderImage[0].clientWidth;

    sliderImage.forEach((e, i) => {
      e.style.left = `${i * 100}%`;
    });
    next_btn.onclick = () => {
      current_slide++;
      if (current_slide >= sliderImage.length) {
        current_slide = 0;
      }
      goSlide(current_slide);
    };
    prev_btn.onclick = () => {
      current_slide--;
      if (current_slide == -1) {
        current_slide = sliderImage.length - 1;
      }
      goSlide(current_slide);
    };

    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        navigation.classList.add("is-navigation-active");
      } else {
        navigation.classList.remove("is-navigation-active");
      }
    });
    window.addEventListener("resize", () => {
      slideWidth = sliderImage[0].clientWidth;
      if (window.matchMedia("(max-width: 767px)").matches) {
        const slideParent = document.querySelector(".slider-mobile");
        const sliderImage = document.querySelectorAll(
          ".slider-mobile > .card-slide"
        );
        const next_btn = document.querySelector(".next_btn");
        const prev_btn = document.querySelector(".prev_btn");
        let current_slide = 0;
        let slideWidth = sliderImage[0].clientWidth;

        sliderImage.forEach((e, i) => {
          e.style.left = `${i * 100}%`;
        });
        next_btn.onclick = () => {
          current_slide++;
          if (current_slide >= sliderImage.length) {
            current_slide = 0;
          }
          goSlide(current_slide);
        };
        prev_btn.onclick = () => {
          current_slide--;
          if (current_slide == -1) {
            current_slide = sliderImage.length - 1;
          }
          goSlide(current_slide);
        };
      } else {
        sliderImage.forEach((e, i) => {
          e.style = "";
        });
        slideParent.style = "";
      }
    });

    function goSlide(slideNumber) {
      slideParent.style.transform =
        "translateX(-" + slideWidth * slideNumber + "px)";
    }
  }