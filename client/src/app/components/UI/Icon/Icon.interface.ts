import { ReactComponent as AddressBook } from "./icons/AddressBook.svg";
import { ReactComponent as Logo } from "./icons/Logo.svg";
import { ReactComponent as Poster } from "./icons/poster.svg";
import { ReactComponent as Shedule } from "./icons/shedule.svg";
import { ReactComponent as Home } from "./icons/home.svg";
import { ReactComponent as ArrowCircleLeft } from "./icons/ArrowCircleLeft.svg";
import { ReactComponent as ArrowLeft } from "./icons/ArrowLeft.svg";
import { ReactComponent as ChatTeardrop } from "./icons/ChatTeardrop.svg";
import { ReactComponent as Check } from "./icons/Check.svg";
import { ReactComponent as ClockAfternoon } from "./icons/ClockAfternoon.svg";
import { ReactComponent as NotePencil } from "./icons/NotePencil.svg";
import { ReactComponent as Paperclip } from "./icons/Paperclip.svg";
import { ReactComponent as Plus } from "./icons/Plus.svg";
import { ReactComponent as Search } from "./icons/Search.svg";
import { ReactComponent as SignOut } from "./icons/SignOut.svg";
import { ReactComponent as Ticket } from "./icons/Ticket.svg";
import { ReactComponent as User } from "./icons/User.svg";
import { ReactComponent as UserList } from "./icons/UserList.svg";
import { ReactComponent as UserPlus } from "./icons/UserPlus.svg";
import { ReactComponent as Users } from "./icons/Users.svg";

export const importedIcons = {
  AddressBook,
  Shedule,
  Poster,
  Home,
  Logo,
  ArrowCircleLeft,
  ArrowLeft,
  ChatTeardrop,
  Check,
  ClockAfternoon,
  NotePencil,
  Paperclip,
  Plus,
  Search,
  SignOut,
  Ticket,
  User,
  UserList,
  UserPlus,
  Users,
};

export type IconName = keyof typeof importedIcons;

export interface IIconInterface extends React.SVGProps<SVGSVGElement> {
  icon: IconName;
  size?: "s" | "m" | "l";
}
