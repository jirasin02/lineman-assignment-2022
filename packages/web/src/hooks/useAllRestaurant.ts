import axios from "axios";
import { useEffect, useState } from "react";
import { Restaurant } from "../types/restaurant";

const useAllRestaurant = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchRestaurants = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("/api/restaurant");
      setRestaurants(response.data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return { restaurants, isLoading };
};

export default useAllRestaurant;
