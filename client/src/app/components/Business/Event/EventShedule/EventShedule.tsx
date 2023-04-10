import styles from "./EventShedule.module.scss";
import { IEventSheduleInterface } from "./EventShedule.interface";
import { Button, Icon, Tag, Typography } from "@components";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEventSheduleSwiper } from "@hooks";
import { getFullRussianDateForTicketCell } from "@helpers";
import cn from "classnames";

const dates = [
  new Date(new Date().setDate(new Date().getDate() - 2)),
  new Date(new Date().setDate(new Date().getDate() - 1)),
  new Date(new Date().setDate(new Date().getDate() + 2)),
  new Date(),
  new Date(new Date().setDate(new Date().getDate() + 1)),
];

export const EventShedule = ({
  className,
  ...props
}: IEventSheduleInterface) => {
  const { activeDay, setActiveDay, sheduleSwiperProps } = useEventSheduleSwiper(
    { dates: dates }
  );

  return (
    <div className={styles.eventShedule} {...props}>
      <Typography variant="h2">Расписание</Typography>
      {true && (
        <ul className={styles.city__list}>
          {Array.from(Array(8).keys()).map((item) => (
            <li className={styles.city__list__item}>
              <Tag variant="button">city</Tag>
            </li>
          ))}
        </ul>
      )}
      <Swiper
        wrapperClass={styles.schedule__list}
        wrapperTag="ul"
        {...sheduleSwiperProps}
      >
        {dates.map((item) => {
          const [dayWeek, number, month, year] =
            getFullRussianDateForTicketCell(item);

          return (
            <SwiperSlide
              className={cn(styles.schedule__list__item, {
                [styles.schedule__list__item_active]: activeDay === item,
              })}
              onClick={() => setActiveDay(item)}
            >
              <Typography>{dayWeek}</Typography>
              <Typography>{number}</Typography>
              <Typography>
                {month} {year}
              </Typography>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {true && (
        <ul className={styles.place__list}>
          {Array.from(Array(8).keys()).map((item) => (
            <li className={styles.place__list__item}>
              <Typography className={styles.place__list__item__name}>
                Название заведения
              </Typography>
              <ul className={styles.place__list__item__places}>
                {Array.from(Array(24).keys()).map((item) => (
                  <li className={styles.place__list__item__places__item}>
                    <Button
                      className={styles.place__list__item__places__item__btn}
                    >
                      <Icon size="l" icon="Ticket" />
                      <div
                        className={styles.place__list__item__places__item__text}
                      >
                        <Typography>15:00</Typography>
                      </div>
                    </Button>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
