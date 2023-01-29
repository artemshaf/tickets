import { MouseEvent } from "react";

export * from "./canvasLayout";

export const getKey = (count = 3): string => {
  let result = "";

  for (let index = 0; index < count; index++) {
    result += (Math.random() * 10000).toString(36).substring(7);
  }

  return result;
};

export const isClickedInside = (e: MouseEvent, element: unknown) => {
  let node: any = e.target;
  while (node) {
    if (node === element) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
};
