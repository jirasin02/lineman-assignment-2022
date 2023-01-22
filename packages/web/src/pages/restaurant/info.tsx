import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Chip from "@/components/Chip";
import MenuItem from "@/components/MenuItem";
import MenuModal from "@/components/MenuModal";
import useRestaurant from "@/hooks/useRestaurant";
import "@/styles/restaurant-info.css";
import { MenuDetail } from "@/types/menu";

const RestaurantInfoPage = () => {
  const params = useParams();
  const restaurantId = params.restaurantId;
  const { restaurant, isLoading } = useRestaurant(restaurantId ?? "");
  const [menuDetail, setMenuDetail] = useState<MenuDetail>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getMenuDetail = async (menuName: string) => {
    const menuDetail = await axios.get(
      `/api/restaurant/${restaurantId}/fullMenu/${menuName}`
    );
    setMenuDetail(menuDetail.data);
  };

  const handleOpenModal = (menuName: string) => {
    getMenuDetail(menuName).then(() => setIsModalOpen(true));
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {!isLoading && restaurant ? (
        <div>
          {isModalOpen && (
            <MenuModal
              menuDetail={menuDetail!}
              handleCloseModal={handleCloseModal}
            />
          )}
          <div style={{ position: "relative" }}>
            {isModalOpen && <div className="modal-background"></div>}
            <div>
              <img
                src={restaurant?.coverImage}
                alt="banner"
                className="restaurant-banner"
              />
              <div className="restaurant-container">
                <div className="restaurant-detail">
                  <div className="restaurant-title">
                    <p className="restaurant-name">{restaurant?.name}</p>
                    <Chip isOpen={restaurant?.isOpen ?? false} />
                  </div>
                  {restaurant?.menus.map((menu, index) => (
                    <MenuItem
                      key={index}
                      index={index}
                      image={menu.thumbnailImage}
                      name={menu.name}
                      fullPrice={menu.fullPrice}
                      discountPrice={menu.discountedPrice}
                      isOutOfStock={menu.isOutOfStock}
                      isDiscounted={menu.isDiscounted}
                      handleOpenModal={handleOpenModal}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default RestaurantInfoPage;
