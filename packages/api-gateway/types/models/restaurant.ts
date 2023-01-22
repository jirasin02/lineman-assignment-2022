export type RestaurantResponse = {
  name: string;
  id: number;
  coverImage: string;
  menus: string[];
  activeTimePeriod: ActiveTimePeriod;
};

export type ActiveTimePeriod = {
  open: string;
  close: string;
};
