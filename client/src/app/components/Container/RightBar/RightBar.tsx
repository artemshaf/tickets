import styles from "./RightBar.module.scss";
import { IRightBarInterface } from "./RightBar.interface";
import { Typography } from "../../UI/Typography";
import { Tag } from "../../UI/Tag";
import { getKey } from "@helpers";

export const RightBar = ({ className, ...props }: IRightBarInterface) => {
  return (
    <aside className={styles.rightBar} {...props}>
      <article>
        <Typography>Actually</Typography>
        {[1, 1, 1, 1, 1].map((item) => (
          <article key={getKey()}>
            <Tag />
            <Typography>Крутой фильм</Typography>
            <Typography>Его дата</Typography>
          </article>
        ))}
      </article>
    </aside>
  );
};
