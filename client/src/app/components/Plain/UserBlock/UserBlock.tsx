import styles from "./UserBlock.module.scss";
import { IUserBlockInterface } from "./UserBlock.interface";
import { Typography } from "../../UI/Typography";
import { Icon } from "../../UI";
import cn from "classnames";

export const UserBlock = ({ className, ...props }: IUserBlockInterface) => {
  return (
    <div className={cn(styles.userBlock, className)} {...props}>
      <Icon size="s" icon="User" className={styles.img} />
      <div className={styles.info}>
        <Typography>User Name</Typography>
        <Typography>User Tag</Typography>
      </div>
      <Icon size="s" icon="SignOut" />
    </div>
  );
};
