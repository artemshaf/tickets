import styles from "./Tag.module.scss";
import { ITagInterface } from "./Tag.interface";
import { createElement } from "react";
import cn from "classnames";

export const Tag = ({
  variant = "span",
  size = "m",
  tagStyle = "accessible",
  className,
  children,
  ...props
}: ITagInterface) => {
  return createElement(
    variant,
    {
      ...props,
      className: cn(
        styles.tag,
        styles[`tag_${tagStyle}`],
        styles[`tag_${size}`],
        className
      ),
    },
    children
  );
};
