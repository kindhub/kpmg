import VSwiper from "./modules/VSwiper";
import VacancyBtn from "./modules/VacancyBtn";
import Content from "./modules/Content";
// import Countup from "./custom_modules/Countup";
import Nav from "./modules/Nav";
import Tab from "./modules/Tab";
/*
	--------------------------------------------
	--------------------------------------------
					SLIDERS
	--------------------------------------------
	--------------------------------------------
 */
  // window.addEventListener('scroll', function() {
  //   var btnWrapper = document.querySelector('.tmpl-hh__first-screen__btn-wrapper');
  //   var btnOffsetTop = btnWrapper.offsetTop;
  //   var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //   var gallerySection = document.querySelector('.tmpl-hh__gallery');
  //   var galleryOffsetTop = gallerySection.offsetTop;
  //   var galleryHeight = gallerySection.offsetHeight;
    
  //   if (scrollTop >= btnOffsetTop && scrollTop < galleryOffsetTop) {
  //     btnWrapper.style.position = 'fixed';
  //     btnWrapper.style.top = '0';
  //     btnWrapper.style.width = '100%';
  //   } else if (scrollTop >= galleryOffsetTop && scrollTop <= galleryOffsetTop + galleryHeight) {
  //     btnWrapper.style.position = 'absolute';
  //     btnWrapper.style.top = (galleryOffsetTop - btnOffsetTop) + 'px';
  //     btnWrapper.style.width = 'auto';
  //   } else {
  //     btnWrapper.style.position = 'static';
  //   }
  // });
  
  
  
  
  // window.addEventListener('scroll', function() {
  //   var btnWrapper = document.querySelector('.tmpl-hh__first-screen__btn-wrapper');
  //   var btnOffsetTop = btnWrapper.offsetTop;
  //   var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //   // var gallerySection = document.querySelector('.tmpl-hh__gallery');
  //   // var galleryOffsetTop = gallerySection.offsetTop;
    
  //   if (scrollTop >= btnOffsetTop && scrollTop) {
  //     btnWrapper.classList.add('tmpl-hh__sticky');
  //   } else {
  //     btnWrapper.classList.remove('tmpl-hh__sticky');
  //   }
  // });
  
  function initWorkSlider() {
    swiper.init(".tmpl-hh__work-kpmg__slider", {
      loop: true,
      effect: "fade",
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      slidesPerView: 1,
    });
  }
  const observerW = new IntersectionObserver((entries) => {
    const firstEntry = entries[0];
    if (firstEntry.isIntersecting) {
      initWorkSlider();
    }
  });
  const swiperContainerW = document.querySelector(".tmpl-hh__work-kpmg ");
  observerW.observe(swiperContainerW);

function initGallerySlider() {
  swiper.init(".tmpl-hh__gallery-slider", {
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
  });
}
const observer = new IntersectionObserver((entries) => {
  const firstEntry = entries[0];
  if (firstEntry.isIntersecting) {
    initGallerySlider();
  }
});
const swiperContainer = document.querySelector(".tmpl-hh__gallery-slider");
observer.observe(swiperContainer);

function initGallerySliderTwo() {
  swiper.init(".tmpl-hh__gallery-slider-two", {
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
  });
}
const observer2 = new IntersectionObserver((entries) => {
  const firstEntry = entries[0];
  if (firstEntry.isIntersecting) {
    initGallerySliderTwo();
  }
});

const swiperContainer2 = document.querySelector(".tmpl-hh__gallery-slider-two");
observer2.observe(swiperContainer2);

// const scrollElements2 = document.querySelectorAll(".tmpl-hh__s-stats");

// const contentKz = document.querySelector(".tmpl-hh__content__about");

// const elementInView = (el, dividend = 1) => {
//   const elementTop = el.getBoundingClientRect().top;
//   return (
//     elementTop <=
//     (window.innerHeight || document.documentElement.clientHeight) / dividend
//   );
// };
// const handleScrollAnimation = () => {
//   scrollElements2.forEach((el) => {
//     if (elementInView(el, 1.5)) {
//       if (contentKz.classList.contains("tmpl-hh__content--active")) {
//         new Countup(".tmpl-hh__s-stats");
//       }
//     }
//   });
// };

// window.addEventListener("scroll", () => {
//   handleScrollAnimation();
// });

/*
	--------------------------------------------
	--------------------------------------------
						COMMON
	--------------------------------------------
	--------------------------------------------
 */

const swiper = new VSwiper();
new VacancyBtn();
new Content();
new Tab();
new Nav();
