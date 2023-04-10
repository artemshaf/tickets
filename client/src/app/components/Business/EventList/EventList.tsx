import styles from "./EventList.module.scss";
import { IEventListInterface } from "./EventList.interface";
import { EventListPanel } from "./EventListPanel";
import { EventItem } from "./EventItem";
import cn from "classnames";

export const EventList = ({ className, ...props }: IEventListInterface) => {
  return (
    <div className={cn(styles.eventList, className)} {...props}>
      <EventListPanel />
      {true && (
        <ul className={cn(styles.list)}>
          {[1, 1, 1, 1, 1, 1, 1].map((event) => (
            <EventItem />
          ))}
        </ul>
      )}
    </div>
  );
};
