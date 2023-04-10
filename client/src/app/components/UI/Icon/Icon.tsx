import styles from "./Icon.module.scss";
import cn from "classnames";
import { IIconInterface, importedIcons } from "./Icon.interface";

export const Icon = ({
  icon,
  size = "m",
  className,
  ...props
}: IIconInterface) => {
  const CurrentIcon = importedIcons[icon];

  return (
    <CurrentIcon
      className={cn(styles.icon, styles[`icon_${size}`], className)}
      {...props}
    />
  );
};
