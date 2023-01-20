import express, { Application } from "express";
import { routesRestaurant } from "./restaurant";

export const router: Application = express();

router.use("/restaurant", routesRestaurant);
