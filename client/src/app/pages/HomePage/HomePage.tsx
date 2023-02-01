import styles from "./HomePage.module.scss";
import { IHomePageInterface } from "./HomePage.interface";

export const HomePage = ({ className, ...props }: IHomePageInterface) => {
  console.log(styles);

  return <div {...props}>12312321</div>;
};
