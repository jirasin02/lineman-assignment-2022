import axios from "axios";
import { useEffect, useState } from "react";
import { RestaurantInfo } from "@/types/restaurant";

const useRestaurant = (restaurantId: string) => {
  const [restaurant, setRestaurant] = useState<RestaurantInfo>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchRestaurantInfo = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`/api/restaurant/${restaurantId}`);
      setRestaurant(response.data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRestaurantInfo();
  }, []);

  return { restaurant, isLoading };
};

export default useRestaurant;
