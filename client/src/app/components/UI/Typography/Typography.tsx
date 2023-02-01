import styles from "./Typography.module.scss";
import { ITypographyInterface } from "./Typography.interface";

export const Typography = ({
  children,
  className,
  ...props
}: ITypographyInterface) => {
  return (
    <p className={styles.typography} {...props}>
      {children}
    </p>
  );
};
