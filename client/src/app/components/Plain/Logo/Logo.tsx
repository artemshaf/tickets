import styles from "./Logo.module.scss";
import { ILogoInterface } from "./Logo.interface";
import { Icon } from "../../UI";
import { Typography } from "../../UI/Typography";

export const Logo = ({ className, ...props }: ILogoInterface) => {
  return (
    <div className={styles.logo} {...props}>
      <Icon icon="Logo" />
      <Typography>Tickets</Typography>
    </div>
  );
};
