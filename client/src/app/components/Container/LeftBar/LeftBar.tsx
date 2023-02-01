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
      <Logo />
      <nav>
        <ul>
          {leftSideBarData.map((item) => (
            <li key={getKey()}>
              <Link to={item.link}>
                {item.icon ? <Icon icon={item.icon} /> : <></>}
                {item.text ? <Typography>{item.text}</Typography> : <></>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <UserBlock />
    </aside>
  );
};
