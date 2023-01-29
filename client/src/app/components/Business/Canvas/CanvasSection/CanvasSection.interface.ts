import { DetailedHTMLProps, HTMLAttributes } from "react";
import {
  ICanvasSection,
  onDeselectSeat,
  onHoverSeat,
  onSelectSeat,
} from "@interfaces";

export interface ICanvasSectionInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  section: ICanvasSection;
  height: number;
  x: number;
  y: number;
  onHoverSeat: onHoverSeat;
  onSelectSeat: onSelectSeat;
  onDeselectSeat: onDeselectSeat;
  selectedSeatsIds: string[];
}
