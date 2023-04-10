import defaultImg from "./imgs/sm.jpeg";
import styles from "./Event.module.scss";
import { IEventInterface } from "./Event.interface";
import cn from "classnames";
import { Button, Icon, Modal, Typography } from "@components";
import { EventShedule } from "./EventShedule";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEventSlider } from "@hooks";
import { useState } from "react";
import { getFullRussianDate } from "../../../helpers";

export const Event = ({ className, ...props }: IEventInterface) => {
  const { botSwiperProps, topSwiperProps } = useEventSlider();
  const [modalSwiperVisible, setModalSwiperVisible] = useState(false);

  const Swipers = () => (
    <>
      <Swiper className={styles.slider__lg} {...topSwiperProps}>
        <SwiperSlide>
          <img src={defaultImg} alt={"event"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={defaultImg} alt={"event"} />
        </SwiperSlide>
      </Swiper>
      <Swiper className={styles.slider__sm} {...botSwiperProps}>
        <SwiperSlide>
          <img src={defaultImg} alt={"event"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={defaultImg} alt={"event"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={defaultImg} alt={"event"} />
        </SwiperSlide>
      </Swiper>
    </>
  );

  return !modalSwiperVisible ? (
    <div className={styles.event} {...props}>
      <div className={cn(styles.swiper__wrapper)}>
        <Button className={cn(styles.icon__wrapper)}>
          <Icon
            onClick={() => setModalSwiperVisible(true)}
            size="m"
            className={cn(styles.icon_loop)}
            icon="Search"
          />
        </Button>
        <Swiper className={styles.slider__lg} {...topSwiperProps}>
          <SwiperSlide>
            <img src={defaultImg} alt={"event"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={defaultImg} alt={"event"} />
          </SwiperSlide>
        </Swiper>
        <Swiper className={styles.slider__sm} {...botSwiperProps}>
          <SwiperSlide>
            <img src={defaultImg} alt={"event"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={defaultImg} alt={"event"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={defaultImg} alt={"event"} />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={cn(styles.info__wrapper)}>
        <Typography variant="h2">Название фильма</Typography>
        <ul className={cn(styles.info__list)}>
          <li className={cn(styles.info__list__item)}>
            <Typography variant="span">Даты показа:</Typography>
            <Typography variant="span">9 февраля - 19 августа</Typography>
          </li>
          <li className={cn(styles.info__list__item)}>
            <Typography variant="span">Даты показа:</Typography>
            <Typography variant="span">9 февраля - 19 августа</Typography>
          </li>
          <li className={cn(styles.info__list__item)}>
            <Typography variant="span">Даты показа:</Typography>
            <Typography variant="span">9 февраля - 19 августа</Typography>
          </li>
          <li className={cn(styles.info__list__item)}>
            <Typography variant="span">Даты показа:</Typography>
            <Typography variant="span">9 февраля - 19 августа</Typography>
          </li>
          <li className={cn(styles.info__list__item)}>
            <Typography variant="span">Даты показа:</Typography>
            <Typography variant="span">9 февраля - 19 августа</Typography>
          </li>
        </ul>
        <EventShedule />
      </div>
      <div className={cn(styles.descr__wrapper)}>
        После принятия образа аватара солдат Джейк Салли становится
        предводителем народа na'vi и берет на себя миссию по защите новых друзей
        от корыстных бизнесменов с Земли. Теперь ему есть за кого бороться — с
        Джейком его прекрасная возлюбленная Нейтири. Когда на Пандору
        возвращаются до зубов вооруженные земляне, Джейк готов дать им отпор.
      </div>
    </div>
  ) : (
    <Modal
      visible={modalSwiperVisible}
      closeModal={() => setModalSwiperVisible(false)}
    >
      <Swiper className={styles.slider__lg_modal} {...topSwiperProps}>
        <SwiperSlide>
          <img src={defaultImg} alt={"event"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={defaultImg} alt={"event"} />
        </SwiperSlide>
      </Swiper>
      <Swiper className={styles.slider__sm_modal} {...botSwiperProps}>
        <SwiperSlide>
          <img src={defaultImg} alt={"event"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={defaultImg} alt={"event"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={defaultImg} alt={"event"} />
        </SwiperSlide>
      </Swiper>
    </Modal>
  );
};
