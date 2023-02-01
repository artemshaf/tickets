import { IconName } from "../components/UI/Icon/Icon.interface";

interface ILinkCommon {
  link: string;
  text?: string;
  icon?: IconName;
}

interface ITextLink extends ILinkCommon {
  text?: string;
  icon?: never;
}

interface IIconLink extends ILinkCommon {
  text?: never;
  icon?: IconName;
}

export type ILink = ILinkCommon;

export interface IRoute {
  path: string;
  element: JSX.Element;
}
