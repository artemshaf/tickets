import styles from "./Modal.module.scss";
import { IModalInterface } from "./Modal.interface";
import { createPortal } from "react-dom";
import { useRef } from "react";
import cn from "classnames";
import { useOnClickOutside } from "usehooks-ts";
import { Button, Icon } from "../../UI";

export const Modal = ({
  closeModal,
  visible = false,
  className,
  children,
  ...props
}: IModalInterface) => {
  const childRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(childRef, closeModal);

  return visible
    ? createPortal(
        <div className={cn(styles.modal)} {...props}>
          <Button className={cn(styles.icon__close)} onClick={closeModal}>
            <Icon icon="Plus" />
          </Button>
          <div className={cn(styles.child)} ref={childRef}>
            {children}
          </div>
        </div>,
        document.getElementById("modal") || document.body
      )
    : null;
};
