import styles from "./Input.module.scss";
import { IInputInterface } from "./Input.interface";

export const Input = ({
  className,
  ...props
}: IInputInterface) => {
  return (
    <div className={styles.input} {...props}>
      Input Component
    </div>
  );
};
