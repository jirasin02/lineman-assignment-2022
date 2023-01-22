import React from "react";

type ChipProps = {
  isOpen: boolean;
};

const Chip: React.FC<ChipProps> = ({ isOpen }) => {
  return (
    <div
      style={{
        backgroundColor: isOpen ? "#00e000" : "lightgray",
        width: "40px",
        height: "20px",
        borderRadius: "0.2rem",
        fontSize: "0.8rem",
        textAlign: "center",
        color: isOpen ? "#fff" : "#000",
        padding: "0.1rem 0.5rem",
        margin: "0.4rem 0",
      }}
    >
      {isOpen ? "เปิด" : "ปิด"}
    </div>
  );
};

export default Chip;
