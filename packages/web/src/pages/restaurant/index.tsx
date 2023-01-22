import banner from "@/assets/images/banner.png";
import RestaurantItem from "@/components/RestaurantItem";
import useAllRestaurant from "@/hooks/useAllRestaurant";
import "@/styles/restaurant-info.css";
import { useNavigate } from "react-router-dom";

const RestaurantPage = () => {
  const { restaurants, isLoading } = useAllRestaurant();
  const navigate = useNavigate();

  const navigateToRestaurant = (restaurantId: number) => {
    navigate(`/restaurant/${restaurantId}`);
  };

  return (
    <div>
      <img src={banner} alt="banner" className="banner" />
      <div className="container">
        {!isLoading && restaurants ? (
          <div>
            {restaurants.map((restaurant, index) => (
              <RestaurantItem
                key={restaurant.id}
                id={restaurant.id}
                image={restaurant.coverImage}
                name={restaurant.name}
                isOpen={restaurant.isOpen}
                openTime={restaurant.activeTimePeriod.open}
                closeTime={restaurant.activeTimePeriod.close}
                navigateToRestaurant={navigateToRestaurant}
              />
            ))}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default RestaurantPage;
