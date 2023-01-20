import axios from "axios";
import { Request, Response } from "express";
import { FullMenuResponse } from "../../../types/models/menu";

export const getFullMenu = (req: Request, res: Response) => {
  const { restaurantId, menuName } = req.params;
  axios
    .get<FullMenuResponse>(
      `https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/${restaurantId}/menus/${menuName}/full.json`
    )
    .then((response) => {
      res.json(response.data);
    });
};
