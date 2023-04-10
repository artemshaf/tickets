import styles from "./HomePage.module.scss";
import { IHomePageInterface } from "./HomePage.interface";
import { EventList } from "../../components";

export const HomePage = ({ className, ...props }: IHomePageInterface) => {
  console.log(styles);

  return (
    <div {...props}>
      <EventList />
    </div>
  );
};
