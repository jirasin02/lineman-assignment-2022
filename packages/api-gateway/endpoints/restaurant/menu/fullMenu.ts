import axios from "axios";
import { Request, Response } from "express";
import { menuResponseToMenuDetail } from "../../../mappers/menu";
import { MenuDetail } from "../../../types/menu";
import { FullMenuResponse } from "../../../types/models/menu";

export const getFullMenu = async (req: Request, res: Response) => {
  const currentDate = new Date();
  const { restaurantId, menuName } = req.params;
  const response = await axios.get<FullMenuResponse>(
    `https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/${restaurantId}/menus/${menuName}/full.json`
  );

  const menuDetail: MenuDetail = menuResponseToMenuDetail(
    response.data,
    currentDate
  );

  res.json(menuDetail);
};
