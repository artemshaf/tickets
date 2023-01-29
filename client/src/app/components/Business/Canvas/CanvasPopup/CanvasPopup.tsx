import { ICanvasPopupInterface } from "./CanvasPopup.interface";
import { useEffect, useRef } from "react";
import { isClickedInside } from "@helpers";

export const CanvasPopup = ({
  onClose,
  seatId,
  position,
  className,
  ...props
}: ICanvasPopupInterface) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const onClick = (e: any) => {
      if (!isClickedInside(e, containerRef.current)) {
        onClose();
      }
    };
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        top: position.y + 20 + "px",
        left: position.x + 20 + "px",
        padding: "10px",
        borderRadius: "3px",
        boxShadow: "0 0 5px grey",
        zIndex: 10,
        backgroundColor: "white",
      }}
      {...props}
    >
      <div>Seat {seatId}</div>
      <div>Click on the seat to select</div>
    </div>
  );
};
