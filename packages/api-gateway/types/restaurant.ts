import { MenuInfo } from "./menu";
import { ActiveTimePeriod } from "./models/restaurant";

export type Restaurant = {
  name: string;
  id: number;
  coverImage: string;
  activeTimePeriod: ActiveTimePeriod;
  isOpen: boolean;
};

export type RestaurantInfo = {
  name: string;
  id: number;
  coverImage: string;
  menus: MenuInfo[];
  isOpen: boolean;
};
