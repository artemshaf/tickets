import styles from "./Logo.module.scss";
import { ILogoInterface } from "./Logo.interface";
import { Icon } from "../../UI";
import { Typography } from "../../UI/Typography";
import cn from "classnames";

export const Logo = ({ className, ...props }: ILogoInterface) => {
  return (
    <div className={cn(styles.logo, className)} {...props}>
      <Icon size="l" icon="Logo" />
      <Typography variant="h4">Tickets</Typography>
    </div>
  );
};
