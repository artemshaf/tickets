import { DetailedHTMLProps, HTMLAttributes } from "react";
import {
  ICanvasSubsection,
  onDeselectSeat,
  onHoverSeat,
  onSelectSeat,
} from "@interfaces";

export interface ICanvasSubsectionInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  x: number;
  y: number;
  data: ICanvasSubsection;
  width: number;
  height: number;
  onHoverSeat: onHoverSeat;
  onSelectSeat: onSelectSeat;
  onDeselectSeat: onDeselectSeat;
  selectedSeatsIds: string[];
}
