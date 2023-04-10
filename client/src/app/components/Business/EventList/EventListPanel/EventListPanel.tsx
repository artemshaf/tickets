import styles from "./EventListPanel.module.scss";
import { IEventListPanelInterface } from "./EventListPanel.interface";
import { Icon } from "../../../UI";

export const EventListPanel = ({
  className,
  ...props
}: IEventListPanelInterface) => {
  return (
    <div className={styles.eventListPanel} {...props}>
      <Icon icon="ArrowCircleLeft" />
    </div>
  );
};
