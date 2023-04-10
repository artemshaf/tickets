import { useState } from "react";
import {
  FreeMode,
  Navigation,
  Thumbs,
  type Swiper as SwiperRefType,
} from "swiper";
import { SwiperProps } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { areDateEquals } from "@helpers";

type ScheduleSwiperProps = {
  dates?: Date[];
};

const getActiveDay = (dates: Date[]): Date | null =>
  dates.find((item) => areDateEquals(new Date(), item)) || null;

export const useEventSheduleSwiper = ({ dates = [] }: ScheduleSwiperProps) => {
  const [activeDay, setActiveDay] = useState<Date | null>(() =>
    getActiveDay(dates)
  );

  const sheduleSwiperProps: SwiperProps = {
    navigation: true,
    slidesPerView: 7,
    spaceBetween: 20,
    modules: [Navigation],
  };

  return {
    activeDay,
    setActiveDay,
    sheduleSwiperProps,
  };
};
