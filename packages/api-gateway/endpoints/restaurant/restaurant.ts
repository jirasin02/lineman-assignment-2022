import axios from "axios";
import { Request, Response } from "express";
import { RestaurantResponse } from "../../types/models/restaurant";

export const getRestaurant = (req: Request, res: Response) => {
  const { restaurantId } = req.params;
  axios
    .get<RestaurantResponse>(
      `https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/${restaurantId}.json`
    )
    .then((response) => {
      res.send(response.data);
      res.json(response.data);
    });
};
