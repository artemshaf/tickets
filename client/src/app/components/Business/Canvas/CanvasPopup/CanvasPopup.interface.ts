import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ICanvasPopupInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  position: {
    x: number;
    y: number;
  };
  seatId: string;
  onClose: () => void;
}
