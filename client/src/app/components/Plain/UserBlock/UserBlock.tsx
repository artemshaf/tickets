import styles from "./UserBlock.module.scss";
import { IUserBlockInterface } from "./UserBlock.interface";
import { Typography } from "../../UI/Typography";
import { Icon } from "../../UI";

export const UserBlock = ({ className, ...props }: IUserBlockInterface) => {
  return (
    <div className={styles.userBlock} {...props}>
      <img />
      <div>
        <Typography>User Name</Typography>
        <Typography>User Tag</Typography>
      </div>
      <Icon icon="SignOut" />
    </div>
  );
};
