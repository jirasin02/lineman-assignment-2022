import axios from "axios";
import { Request, Response } from "express";
import { ShortMenuResponse } from "../../../types/models/menu";

export const getShortMenu = (req: Request, res: Response) => {
  const { restaurantId, menuName } = req.params;
  axios
    .get<ShortMenuResponse>(
      `https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/${restaurantId}/menus/${menuName}/short.json`
    )
    .then((response) => {
      res.json(response.data);
    });
};
