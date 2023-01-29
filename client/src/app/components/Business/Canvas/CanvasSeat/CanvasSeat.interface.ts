import { DetailedHTMLProps, HTMLAttributes } from "react";
import {
  ICanvasSeat,
  isBooked,
  onDeselectSeat,
  onHoverSeat,
  onSelectSeat,
  SeatType,
} from "@interfaces";

export interface ICanvasSeatInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: ICanvasSeat;
  isSeatType: SeatType;
  isBooked?: boolean;
  x: number;
  y: number;
  onHoverSeat: onHoverSeat;
  onSelectSeat: onSelectSeat;
  onDeselectSeat: onDeselectSeat;
}
