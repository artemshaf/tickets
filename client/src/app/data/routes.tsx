import { IRoute } from "@interfaces";
import { PAGE_CONSTS } from "@utils";
import { HomePage, EventPage } from "@pages";

export const publicRoutes: IRoute[] = [
  {
    path: PAGE_CONSTS.HOME,
    element: <HomePage />,
  },
  {
    path: PAGE_CONSTS.EVENT,
    element: <EventPage />,
  },
];

export const authRoutes: IRoute[] = [];
