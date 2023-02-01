import { IRoute } from "@interfaces";
import { PAGE_CONSTS } from "@utils";
import { HomePage } from "@pages";

export const publicRoutes: IRoute[] = [
  {
    path: PAGE_CONSTS.HOME,
    element: <HomePage />,
  },
];

export const authRoutes: IRoute[] = [];
