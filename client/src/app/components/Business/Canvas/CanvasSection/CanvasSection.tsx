import styles from "./CanvasSection.module.scss";
import { ICanvasSectionInterface } from "./CanvasSection.interface";
import { memo, useEffect, useRef } from "react";
import { Group, Rect, Text } from "@utils";
import { CanvasSubsection } from "../CanvasSubsection";
import {
  getSectionWidth,
  getSubsectionWidth,
  SECTION_TOP_PADDING,
} from "@helpers";
import { Group as GroupType } from "konva/lib/Group";

export const CanvasSection = memo(
  ({
    section,
    height,
    onDeselectSeat,
    onHoverSeat,
    onSelectSeat,
    selectedSeatsIds,
    x,
    y,
    className,
  }: ICanvasSectionInterface) => {
    const containerRef = useRef<GroupType>(null);

    // caching will boost rendering
    // we just need to recache on some changes
    useEffect(() => {
      containerRef?.current?.cache();
    }, [section, selectedSeatsIds]);

    const width = getSectionWidth(section);
    let lastSubsectionX = 0;

    return (
      <Group y={y} x={x} ref={containerRef}>
        <Rect
          width={width}
          height={height}
          fill="white"
          strokeWidth={1}
          stroke="lightgrey"
          cornerRadius={5}
        />
        {section.subsections.map((subsection) => {
          const subWidth = getSubsectionWidth(subsection);
          const posX = lastSubsectionX;
          lastSubsectionX += subWidth;

          return (
            <CanvasSubsection
              x={posX}
              y={SECTION_TOP_PADDING}
              key={subsection.name}
              data={subsection}
              width={subWidth}
              height={height}
              onHoverSeat={onHoverSeat}
              onSelectSeat={onSelectSeat}
              onDeselectSeat={onDeselectSeat}
              selectedSeatsIds={selectedSeatsIds}
            />
          );
        })}
        <Text
          text={section.name}
          height={SECTION_TOP_PADDING}
          width={width}
          align="center"
          verticalAlign="middle"
          fontSize={20}
        />
      </Group>
    );
  }
);
