import axios from "axios";
import { Request, Response } from "express";
import { shortMenuResponseToMenuInfo } from "../../mappers/menu";
import { restaurantResponseToRestaurantInfo } from "../../mappers/restaurant";
import { Restaurant, RestaurantInfo } from "../../types/restaurant";
import { RestaurantResponse } from "../../types/models/restaurant";
import { getShortMenu } from "./menu/shortMenu";

const restaurantsId: String[] = ["567051", "227018"];

const getHourAndMinute = (hourAndMinute: string) => {
  const [hour, minute] = hourAndMinute.split(":") as [string, string];
  return {
    hour: +hour,
    minute: +minute,
  };
};

export const isInTimeRange = (date: Date, open: string, close: string) => {
  try {
    const now = new Date(date);
    const openTime = new Date(date);
    const closeTime = new Date(date);
    openTime.setSeconds(0);
    openTime.setMilliseconds(0);
    closeTime.setSeconds(0);
    closeTime.setMilliseconds(0);
    const { hour: openHour, minute: openMinute } = getHourAndMinute(open);
    const { hour: closeHour, minute: closeMinute } = getHourAndMinute(close);
    if (openHour > closeHour) {
      closeTime.setDate(closeTime.getDate() + 1);
    }
    openTime.setHours(openHour);
    openTime.setMinutes(openMinute);

    closeTime.setHours(closeHour);
    closeTime.setMinutes(closeMinute);

    return now >= openTime && now <= closeTime;
  } catch (e) {
    return false;
  }
};

export const getAllRestaurants = async (req: Request, res: Response) => {
  const currentDate = new Date();
  const promises = restaurantsId.map((restaurantId) =>
    axios.get<RestaurantResponse>(
      `https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/${restaurantId}.json`
    )
  );

  const restaurantResponse = await Promise.all(promises);

  const restaurants: Restaurant[] = restaurantResponseToRestaurantInfo(
    restaurantResponse.map((res) => res.data),
    currentDate
  );

  res.json(restaurants);
};

export const getRestaurantInfo = async (req: Request, res: Response) => {
  const currentDate = new Date();
  const { restaurantId } = req.params;
  const response = await axios.get<RestaurantResponse>(
    `https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/${restaurantId}.json`
  );
  const promises = response.data.menus.map((menu) => {
    return getShortMenu(restaurantId, menu);
  });

  const shortMenuResponse = await Promise.all(promises);

  const restaurantInfo: RestaurantInfo = {
    name: response.data.name,
    id: response.data.id,
    coverImage: response.data.coverImage,
    menus: shortMenuResponseToMenuInfo(shortMenuResponse, currentDate),
    isOpen: isInTimeRange(
      currentDate,
      response.data.activeTimePeriod.open,
      response.data.activeTimePeriod.close
    ),
  };

  res.json(restaurantInfo);
};
