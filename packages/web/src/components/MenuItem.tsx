import React from "react";
import logo from "@/assets/images/logo.jpeg";
import "../styles/menu.css";

export type MenuItemProps = {
  index: number;
  image?: string;
  name: string;
  fullPrice: number;
  discountPrice?: number;
  isOutOfStock: boolean;
  isDiscounted: boolean;
  handleOpenModal: (menuName: string) => void;
};

const MenuItem: React.FC<MenuItemProps> = ({
  index,
  image,
  name,
  fullPrice,
  discountPrice,
  isOutOfStock,
  isDiscounted,
  handleOpenModal,
}) => {
  return (
    <div
      className="menu-item"
      onClick={() => {
        handleOpenModal(name);
      }}
    >
      <img src={image != "" ? image : logo} alt="img" />
      <div className="menu-item-detail">
        <p>
          {name} {isOutOfStock && "(หมด)"}
        </p>
        <div className="menu-item-price">
          <p
            style={{
              marginRight: isDiscounted ? "10px" : "0px",
              textDecoration: isDiscounted ? "line-through" : "none",
            }}
          >{`${fullPrice} บาท`}</p>
          {isDiscounted && <p>{`${discountPrice} บาท`}</p>}
        </div>
        <p style={{ color: "green" }}>{index == 0 && "(เมนูขายดี!)"}</p>
      </div>
    </div>
  );
};

export default MenuItem;
