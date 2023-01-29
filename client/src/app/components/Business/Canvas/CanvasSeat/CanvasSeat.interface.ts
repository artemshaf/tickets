import { DetailedHTMLProps, HTMLAttributes } from "react";
import {
  ICanvasSeat,
  isBooked,
  onDeselectSeat,
  onHoverSeat,
  onSelectSeat,
} from "@interfaces";

export interface ICanvasSeatInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: ICanvasSeat;

  isBooked?: isBooked;
  x: number;
  y: number;
  onHoverSeat: onHoverSeat;
  onSelectSeat: onSelectSeat;
  onDeselectSeat: onDeselectSeat;
  isSelected: boolean;
}
