import { ReactHTML } from "react";
import { DetailedHTMLProps, HTMLAttributes } from "react";

type AllowTags = Pick<
  ReactHTML,
  "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "p"
>;
export const AllowTagsArray = ["h1", "h2", "h3", "h4", "h5", "span", "p"];
export interface ITypographyInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  variant?: keyof AllowTags;
}
