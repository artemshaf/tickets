import styles from "./LeftBar.module.scss";
import { ILeftBarInterface } from "./LeftBar.interface";
import { Logo, UserBlock } from "../../Plain";
import { leftSideBarData } from "@data";
import { Icon } from "../../UI";
import { Link } from "react-router-dom";
import { Typography } from "../../UI/Typography";
import { getKey } from "@helpers";

export const LeftBar = ({ className, ...props }: ILeftBarInterface) => {
  return (
    <aside className={styles.leftBar} {...props}>
      <Logo className={styles.logo} />
      <nav>
        <ul className={styles.list}>
          {leftSideBarData.map((item) => (
            <li key={getKey()} className={styles.list__item}>
              <Link to={item.link}>
                {item.icon ? <Icon size="s" icon={item.icon} /> : <></>}
                {item.text ? (
                  <Typography variant="span">{item.text}</Typography>
                ) : (
                  <></>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <UserBlock className={styles.user__block} />
    </aside>
  );
};
