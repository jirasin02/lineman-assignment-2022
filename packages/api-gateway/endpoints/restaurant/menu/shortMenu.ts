import axios from "axios";
import { ShortMenuResponse } from "../../../types/models/menu";

export const getShortMenu = async (restaurantId: string, menuName: string) => {
  const response = await axios.get<ShortMenuResponse>(
    `https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/${restaurantId}/menus/${menuName}/short.json`
  );
  return response.data;
};
