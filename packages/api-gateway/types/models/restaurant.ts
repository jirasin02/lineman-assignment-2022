export type RestaurantResponse = {
  name: string;
  id: number;
  coverImage: string;
  menus: String[];
  activeTimePeriod: ActiveTimePeriod;
};

export type ActiveTimePeriod = {
  open: string;
  close: string;
};
