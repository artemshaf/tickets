import styles from "./PosterPage.module.scss";
import { IPosterPageInterface } from "./PosterPage.interface";

export const PosterPage = ({
  className,
  ...props
}: IPosterPageInterface) => {
  return (
    <div className={styles.posterPage} {...props}>
      PosterPage Component
    </div>
  );
};
