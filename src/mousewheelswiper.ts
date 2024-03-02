import { animationSlide } from "./gsap";
export const mousewheelSwiper = new Swiper(".mousewheelSwiper", {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 90,
    mousewheel: true,
    on: {
        init: (el: any) => animationSlide(el.slides[el.activeIndex], 0),
        slideChangeTransitionStart: (el: any) => animationSlide(el.slides[el.activeIndex], 0),
      },
  });