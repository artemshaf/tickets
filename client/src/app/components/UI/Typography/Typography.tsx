import styles from "./Typography.module.scss";
import { AllowTagsArray, ITypographyInterface } from "./Typography.interface";
import cn from "classnames";
import { createElement } from "react";

export const Typography = ({
  variant = "p",
  children,
  className,
  ...props
}: ITypographyInterface) => {
  const rightStyles = styles[`${variant}`];

  const tag = AllowTagsArray.includes(variant) ? variant : "p";

  return createElement(
    tag,
    { ...props, className: cn(className, rightStyles) },
    children
  );
};
