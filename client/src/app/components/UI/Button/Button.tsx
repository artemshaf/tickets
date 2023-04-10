import styles from "./Button.module.scss";
import { IButtonInterface } from "./Button.interface";
import cn from "classnames";

export const Button = ({ className, children, ...props }: IButtonInterface) => {
  return (
    <button className={cn(styles.button, className)} {...props}>
      {children}
    </button>
  );
};
