import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ICanvasPosition } from "@interfaces";

export interface ICanvasPopupInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  position: ICanvasPosition | null;
  seatId: string;
  onClose: () => void;
}
