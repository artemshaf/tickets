import styles from "./Button.module.scss";
import { IButtonInterface } from "./Button.interface";

export const Button = ({
  className,
  ...props
}: IButtonInterface) => {
  return (
    <div className={styles.button} {...props}>
      Button Component
    </div>
  );
};
