import React from "react";
import "../styles/menu.css";
import logo from "@/assets/images/logo.jpeg";
import { MenuDetail } from "@/types/menu";

export type MenuModalProps = {
  menuDetail: MenuDetail;
  handleCloseModal: () => void;
};

const MenuModal: React.FC<MenuModalProps> = ({
  menuDetail,
  handleCloseModal,
}) => {
  return (
    <div className="menu-modal-container">
      <div className="modal-content">
        <div className="modal-title">
          <div></div>
          <p>{menuDetail.name}</p>
          <div
            className="close-icon"
            onClick={() => {
              handleCloseModal();
            }}
          >
            <i className="gg-chevron-down"></i>
          </div>
        </div>
        <img
          src={menuDetail.largeImage ? menuDetail.largeImage : logo}
          alt=""
        />
        <div className="modal-detail">
          <div className="modal-price">
            {menuDetail.isDiscounted ? (
              <div className="modal-discount">
                <p>ราคา {menuDetail.discountedPrice} บาท</p>
                <p
                  style={{
                    fontSize: "1rem",
                    textDecoration: "line-through",
                    marginLeft: "0.8rem",
                    marginTop: "0.2rem",
                  }}
                >
                  {menuDetail.fullPrice} บาท
                </p>
              </div>
            ) : (
              <p>ราคา {menuDetail.fullPrice} บาท</p>
            )}
          </div>
          <div className="divider" />
          {menuDetail.options.map((option) => (
            <div>
              <p className="option-label">{option.label}</p>
              {option.choices.map((choice) => (
                <p className="option-choice">- {choice.label}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
