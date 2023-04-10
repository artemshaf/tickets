import { useState } from "react";
import { FreeMode, Thumbs, type Swiper as SwiperRefType } from "swiper";
import { SwiperProps } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

export const useEventSlider = () => {
  const [swiperThumbsTop, setSwiperThumbsTop] = useState<SwiperRefType | null>(
    null
  );
  const [swiperThumbsBot, setSwiperThumbsBot] = useState<SwiperRefType | null>(
    null
  );

  const slideTo = (index: number) => {
    if (swiperThumbsTop) {
      swiperThumbsTop.slideTo(index);
    }
    if (swiperThumbsBot) {
      swiperThumbsBot.slideTo(index);
    }
  };

  const topSwiperProps: SwiperProps = {
    onSwiper: setSwiperThumbsTop,
    thumbs: {
      swiper:
        swiperThumbsBot && !swiperThumbsBot.destroy ? swiperThumbsBot : null,
    },
    onSlideChange: (swiper) => {
      slideTo(swiper.activeIndex);
    },
    spaceBetween: 30,
    grabCursor: true,
    modules: [FreeMode, Thumbs],
  };

  const botSwiperProps: SwiperProps = {
    thumbs: {
      swiper:
        swiperThumbsTop && !swiperThumbsTop.destroy ? swiperThumbsTop : null,
    },
    onSlideChange: (swiper) => {
      slideTo(swiper.activeIndex);
    },
    onSwiper: setSwiperThumbsBot,
    spaceBetween: 10,
    slidesPerView: 2.2,
    slideToClickedSlide: true,
    modules: [FreeMode, Thumbs],
  };

  return {
    topSwiperProps,
    botSwiperProps,
  };
};
