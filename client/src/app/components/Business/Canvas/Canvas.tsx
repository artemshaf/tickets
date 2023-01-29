import styles from "./Canvas.module.scss";
import { ICanvasInterface } from "./Canvas.interface";
import { useCanvas, useFetch } from "@hooks";
import { CanvasSection } from "./CanvasSection";
import { Layer, Stage } from "@utils";
import {
  getKey,
  getMaximimSectionWidth,
  getSectionHeight,
  getSectionWidth,
  SECTIONS_MARGIN,
} from "@helpers";
import { ICanvasData, ISeatPopup } from "@interfaces";
import { CanvasPopup } from "./CanvasPopup";

export const Canvas = ({ className, ...props }: ICanvasInterface) => {
  const fetchData = useFetch<ICanvasData>("./canvas.json");
  const {
    popup,
    setPopup,
    handleDeselect,
    handleHover,
    handleSelect,
    selectedSeatsIds,
    stageRef,
    containerRef,
    size,
    virtualWidth,
    toggleScale,
    scale,
  } = useCanvas({ data: fetchData || ({} as ICanvasData) });

  let lastSectionPosition = 0;

  const maxSectionWidth = getMaximimSectionWidth(
    fetchData?.seats.sections || []
  );

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "lightgrey",
        width: "99vw",
        height: "99vh",
      }}
      className={styles.canvasSection}
      ref={containerRef}
      {...props}
    >
      <Stage
        ref={stageRef}
        width={size.width}
        height={size.height}
        draggable
        dragBoundFunc={(pos) => {
          pos.x = Math.min(
            size.width / 2,
            Math.max(pos.x, -virtualWidth * scale + size.width / 2)
          );
          pos.y = Math.min(size.height / 2, Math.max(pos.y, -size.height / 2));
          return pos;
        }}
        onDblTap={toggleScale}
        onDblClick={toggleScale}
        scaleX={scale}
        scaleY={scale}
      >
        <Layer>
          {fetchData?.seats.sections.map((section, index) => {
            const height = getSectionHeight(section);
            const position = lastSectionPosition + SECTIONS_MARGIN;
            lastSectionPosition = position + height;
            const width = getSectionWidth(section);

            const offset = (maxSectionWidth - width) / 2;

            return (
              <CanvasSection
                x={offset}
                y={position}
                height={height}
                key={getKey()}
                section={section}
                selectedSeatsIds={selectedSeatsIds}
                onHoverSeat={handleHover}
                onSelectSeat={handleSelect}
                onDeselectSeat={handleDeselect}
              />
            );
          })}
        </Layer>
      </Stage>
      {popup?.seat && (
        <CanvasPopup
          position={popup.position}
          seatId={popup.seat}
          onClose={() => {
            setPopup({} as ISeatPopup);
          }}
        />
      )}
    </div>
  );
};
