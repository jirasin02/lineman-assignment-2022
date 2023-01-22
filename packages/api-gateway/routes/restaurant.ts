import express, { Application } from "express";
import { getFullMenu } from "../endpoints/restaurant/menu/fullMenu";
import { getShortMenu } from "../endpoints/restaurant/menu/shortMenu";
import {
  getAllRestaurants,
  getRestaurantInfo,
} from "../endpoints/restaurant/restaurant";

export const routesRestaurant: Application = express();

routesRestaurant.get("/", getAllRestaurants);
routesRestaurant.get("/:restaurantId", getRestaurantInfo);
routesRestaurant.get("/:restaurantId/fullMenu/:menuName", getFullMenu);
