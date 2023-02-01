import styles from "./JournalPage.module.scss";
import { IJournalPageInterface } from "./JournalPage.interface";

export const JournalPage = ({
  className,
  ...props
}: IJournalPageInterface) => {
  return (
    <div className={styles.journalPage} {...props}>
      JournalPage Component
    </div>
  );
};
