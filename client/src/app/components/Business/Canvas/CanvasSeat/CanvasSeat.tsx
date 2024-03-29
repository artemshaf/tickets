import styles from "./CanvasSeat.module.scss";
import { ICanvasSeatInterface } from "./CanvasSeat.interface";
import { Circle } from "@utils";
import { getColor, SEAT_SIZE } from "@helpers";

export const CanvasSeat = ({
  data,
  isBooked = false,
  isSeatType,
  onDeselectSeat,
  onHoverSeat,
  onSelectSeat,
  x,
  y,
  className,
  ...props
}: ICanvasSeatInterface) => {
  const fillColor = getColor(isBooked ? "isBooked" : isSeatType);

  return (
    <Circle
      x={x}
      y={y}
      radius={SEAT_SIZE / 2}
      fill={fillColor}
      strokeWidth={1}
      onMouseEnter={(e) => {
        e.target._clearCache();
        onHoverSeat(data.name, e.target.getAbsolutePosition());
        const container = e.target.getStage()?.container();

        if (!container) return;

        if (isBooked) {
          container.style.cursor = "not-allowed";
        } else {
          container.style.cursor = "pointer";
        }
      }}
      onMouseLeave={(e) => {
        onHoverSeat(null, null);
        const container = e.target.getStage()?.container();

        if (!container) return;

        container.style.cursor = "";
      }}
      onClick={(e) => {
        if (isBooked) {
          return;
        }
        if (isSeatType === "isSelected") {
          onDeselectSeat(data.name);
        } else {
          onSelectSeat(data.name);
        }
      }}
      onTap={(e) => {
        if (isBooked) {
          return;
        }
        if (isSeatType === "isSelected") {
          onDeselectSeat(data.name);
        } else {
          onSelectSeat(data.name);
        }
      }}
    />
  );
};
