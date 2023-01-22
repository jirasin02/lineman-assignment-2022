import React from "react";
import "../styles/restaurant.css";
import Chip from "./Chip";

export type RestaurantItemProps = {
  id: number;
  image: string;
  name: string;
  openTime: string;
  closeTime: string;
  isOpen: boolean;
  navigateToRestaurant: (restaurantId: number) => void;
};

const RestaurantItem: React.FC<RestaurantItemProps> = ({
  id,
  image,
  name,
  openTime,
  closeTime,
  isOpen,
  navigateToRestaurant,
}) => {
  return (
    <div
      className="restaurant-item"
      onClick={() => {
        navigateToRestaurant(id);
      }}
    >
      <img src={image} alt="img" />
      <div className="restaurant-item-detail">
        <p style={{ fontWeight: 500 }}>{name}</p>
        <Chip isOpen={isOpen} />
        <p className="restaurant-item-time">{`${openTime} - ${closeTime}`}</p>
      </div>
    </div>
  );
};

export default RestaurantItem;
