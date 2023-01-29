import { useCallback, useEffect, useRef, useState } from "react";
import { StageProps } from "react-konva";
import {
  ICanvasPosition,
  ICanvasSeat,
  ISeatPopup,
  IUseCanvasContainerRef,
  IUseCanvasProps,
  IVirtualWidth,
} from "@interfaces";

export const useCanvas = ({ data }: IUseCanvasProps) => {
  const containerRef = useRef<IUseCanvasContainerRef>(null);
  const stageRef = useRef(null);

  const [scale, setScale] = useState<number>(0.5);
  const [scaleToFit, setScaleToFit] = useState<number>(1);
  const [size, setSize] = useState<IVirtualWidth>({
    width: 1000,
    height: 1000,
    virtualWidth: 1000,
  });
  const [virtualWidth, setVirtualWidth] = useState<number>(1000);

  const [selectedSeatsIds, setSelectedSeatsIds] = useState<string[]>([]);

  const [popup, setPopup] = useState<ISeatPopup>();

  useEffect(() => {
    if (!containerRef) return;
    const newSize = {
      width: containerRef.current?.offsetWidth!,
      height: containerRef.current?.offsetHeight!,
    };
    if (!newSize) return;
    if (newSize.width !== size.width || newSize.height !== size.height) {
      setSize(newSize);
    }
  });

  //! initial scale
  useEffect(() => {
    if (!stageRef.current) {
      return;
    }
    const stage: StageProps = stageRef.current;

    const clientRect = stage.getClientRect({ skipTransform: true });

    const scaleToFit = size.width / clientRect.width;
    setScale(scaleToFit);
    setScaleToFit(scaleToFit);
    setVirtualWidth(clientRect.width);
  }, [data, size]);

  const toggleScale = useCallback(() => {
    if (scale === 1) {
      setScale(scaleToFit);
    } else {
      setScale(1);
    }
  }, [scale, scaleToFit]);

  const handleHover = useCallback(
    (seat: string | null, position: ICanvasPosition | null) => {
      setPopup({
        seat,
        position,
      });
    },
    []
  );

  const handleSelect = useCallback(
    (seatId: string) => {
      const newIds = selectedSeatsIds.concat([seatId]);
      setSelectedSeatsIds(newIds);
    },
    [selectedSeatsIds]
  );

  const handleDeselect = useCallback(
    (seatId: string) => {
      const ids = selectedSeatsIds.slice();
      ids.splice(ids.indexOf(seatId), 1);
      setSelectedSeatsIds(ids);
    },
    [selectedSeatsIds]
  );

  return {
    popup,
    setPopup,
    containerRef,
    stageRef,
    scale,
    size,
    virtualWidth,
    selectedSeatsIds,
    toggleScale,
    handleHover,
    handleSelect,
    handleDeselect,
  };
};
