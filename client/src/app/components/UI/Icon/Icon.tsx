import styles from "./Icon.module.scss";
import { IIconInterface, importedIcons } from "./Icon.interface";

export const Icon = ({ icon, className, ...props }: IIconInterface) => {
  const CurrentIcon = importedIcons[icon];

  return <CurrentIcon />;
};
