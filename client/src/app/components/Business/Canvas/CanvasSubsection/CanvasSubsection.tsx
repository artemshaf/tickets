import styles from "./CanvasSubsection.module.scss";
import { ICanvasSubsectionInterface } from "./CanvasSubsection.interface";
import { Group, Text } from "@utils";
import { Fragment } from "react";
import { CanvasSeat } from "../CanvasSeat";
import {
  getKey,
  getSeatType,
  SEATS_DISTANCE,
  SEAT_SIZE,
  SUBSECTION_PADDING,
} from "@helpers";
import { ICanvasSeat } from "@interfaces";

export const CanvasSubsection = ({
  data,
  height,
  onDeselectSeat,
  onHoverSeat,
  onSelectSeat,
  selectedSeatsIds,
  width,
  x,
  y,
  className,
  ...props
}: ICanvasSubsectionInterface) => {
  return (
    <Group x={x} y={y}>
      {Object.keys(data.seats_by_rows).map((rowKey, rowIndex) => {
        const row = data.seats_by_rows[rowKey];
        return (
          <Fragment key={getKey()}>
            {row.map((seat: ICanvasSeat, seatIndex) => {
              return (
                <CanvasSeat
                  key={getKey()}
                  x={seatIndex * SEATS_DISTANCE + SUBSECTION_PADDING}
                  y={rowIndex * SEATS_DISTANCE + SUBSECTION_PADDING}
                  data={seat}
                  onHoverSeat={onHoverSeat}
                  onSelectSeat={onSelectSeat}
                  onDeselectSeat={onDeselectSeat}
                  isBooked={seat.status === "booked" ? true : false}
                  isSeatType={getSeatType(selectedSeatsIds, seat.name)}
                />
              );
            })}
            <Text
              text={rowKey}
              x={SUBSECTION_PADDING - SEATS_DISTANCE}
              y={rowIndex * SEATS_DISTANCE + SUBSECTION_PADDING - SEAT_SIZE / 2}
              fontSize={SEAT_SIZE}
              key={"label-left" + getKey()}
            />
          </Fragment>
        );
      })}
      {data.seats_by_rows[1].map((_, seatIndex) => {
        return (
          <Text
            text={(seatIndex + 1).toString()}
            x={seatIndex * SEATS_DISTANCE + SUBSECTION_PADDING - 50}
            width={100}
            y={
              Object.keys(data.seats_by_rows).length * SEATS_DISTANCE +
              SUBSECTION_PADDING
            }
            key={"label-bottom" + seatIndex}
            align="center"
          />
        );
      })}
      <Text text={data.name} width={width} align="center" y={-10} />
    </Group>
  );
};
