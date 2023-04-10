import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IModalInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  visible: boolean;
  closeModal: () => void;
}
