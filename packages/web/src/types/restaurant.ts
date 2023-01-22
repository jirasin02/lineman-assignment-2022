import { MenuInfo } from "@/types/menu";

export type Restaurant = {
  name: string;
  id: number;
  coverImage: string;
  activeTimePeriod: ActiveTimePeriod;
  isOpen: boolean;
};

export type ActiveTimePeriod = {
  open: string;
  close: string;
};

export type RestaurantInfo = {
  name: string;
  id: number;
  coverImage: string;
  menus: MenuInfo[];
  isOpen: boolean;
};
