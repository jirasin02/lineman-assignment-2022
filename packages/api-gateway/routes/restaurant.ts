import express, { Application } from "express";
import { getFullMenu } from "../endpoints/restaurant/menu/fullMenu";
import { getShortMenu } from "../endpoints/restaurant/menu/shortMenu";
import { getRestaurant } from "../endpoints/restaurant/restaurant";

export const routesRestaurant: Application = express();

routesRestaurant.get("/:restaurantId", getRestaurant);
routesRestaurant.get("/:restaurantId/shortMenu/:menuName", getShortMenu);
routesRestaurant.get("/:restaurantId/fullMenu/:menuName", getFullMenu);
