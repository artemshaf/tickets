import { ReactHTML } from "react";
import { DetailedHTMLProps, HTMLAttributes } from "react";

type AllowTags = Pick<
  ReactHTML,
  "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "p" | "button"
>;

export interface ITagInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  variant?: keyof AllowTags;
  size?: "s" | "m" | "l";
  tagStyle?: "accessible" | "finished";
}
