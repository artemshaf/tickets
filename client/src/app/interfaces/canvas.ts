export interface IUseCanvasProps {
  data: ICanvasData;
}

export interface IVirtualWidth {
  height: number;
  width: number;
  virtualWidth?: number;
}

export interface ISeatPopup {
  seat: string | null;
  position: ICanvasPosition | null;
}

export interface ICanvasPosition {
  x: number;
  y: number;
}

export interface IUseCanvasContainerRef extends HTMLDivElement {}

export interface ICanvasSeat {
  name: string;
  status: string;
}

export interface ICanvasSeatsByRow {
  [key: string | number]: ICanvasSeat[];
}

export interface ICanvasSubsection {
  id: number;
  section_id: number;
  name: string;
  seats_by_rows: ICanvasSeatsByRow;
}

export interface ICanvasSection {
  event_id: number;
  name: string;
  color: string | null;
  subsections: ICanvasSubsection[];
}

export interface ICanvasSeats {
  sections: ICanvasSection[];
}

export interface ICanvasData {
  seats: ICanvasSeats;
}

export type onHoverSeat = (
  seat: string | null,
  position: ICanvasPosition | null
) => void;

export type onSelectSeat = (seatId: string) => void;
export type onDeselectSeat = (seatId: string) => void;
export type isBooked = boolean;
export type SeatType = "isBooked" | "isSelected" | "default";
