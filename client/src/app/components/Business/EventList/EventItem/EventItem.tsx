import styles from "./EventItem.module.scss";
import { IEventItemInterface } from "./EventItem.interface";
import { memo, useState } from "react";
import defaultImg from "./imgs/default.jpg";
import { Button, Typography } from "@components";
import cn from "classnames";
import { Link } from "react-router-dom";
import { PAGE_CONSTS } from "@utils";

export const EventItem = memo(
  ({ className, ...props }: IEventItemInterface) => {
    const [isShown, setIsShown] = useState(false);

    return (
      <li
        className={styles.eventItem}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        {...props}
      >
        <Link
          to={PAGE_CONSTS.EVENT}
          className={cn(styles.img__wrapper, className)}
        >
          <img className={cn(styles.img)} src={defaultImg} alt={"event"} />
          <Typography
            className={cn(styles.img__text, {
              [styles.img__text__visible]: isShown,
            })}
          >
            Перейти на страницу события
          </Typography>
          {isShown && (
            <svg
              viewBox="0 0 186 3"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.icon_roll}
            >
              {Array.from(Array(15).keys()).map((_, index) => (
                <circle cx={index * 16 + 5} cy="6px" r="7"></circle>
              ))}
            </svg>
          )}
        </Link>
        <Typography>descr</Typography>
        <Typography>descr</Typography>
        <Button>Show page</Button>
      </li>
    );
  }
);
