import styles from "./Tag.module.scss";
import { ITagInterface } from "./Tag.interface";

export const Tag = ({
  className,
  ...props
}: ITagInterface) => {
  return (
    <div className={styles.tag} {...props}>
      Tag Component
    </div>
  );
};
