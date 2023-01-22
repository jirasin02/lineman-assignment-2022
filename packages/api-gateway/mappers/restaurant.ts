import { Restaurant } from "../types/restaurant";
import { RestaurantResponse } from "../types/models/restaurant";
import { isInTimeRange } from "../endpoints/restaurant/restaurant";

export const restaurantResponseToRestaurantInfo = (
  restaurants: RestaurantResponse[],
  currentDate: Date
): Restaurant[] => {
  return restaurants.map((restaurant) => ({
    name: restaurant.name,
    id: restaurant.id,
    coverImage: restaurant.coverImage,
    activeTimePeriod: restaurant.activeTimePeriod,
    isOpen: isInTimeRange(
      currentDate,
      restaurant.activeTimePeriod.open,
      restaurant.activeTimePeriod.close
    ),
  }));
};
