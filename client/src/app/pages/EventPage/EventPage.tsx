import styles from "./EventPage.module.scss";
import { IEventPageInterface } from "./EventPage.interface";
import { Event } from "@components";

export const EventPage = ({ className, ...props }: IEventPageInterface) => {
  return (
    <div {...props}>
      <Event />
    </div>
  );
};
