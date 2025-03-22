import React, { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import Modal from "./Modal"; 

const Product = ({ d }) => {
  const [addBtn, setAddBtn] = useState(() => {
    return (
      <span className="first-add-btn">
        <img src="/images/icon-add-to-cart.svg" alt="" /> Add to Cart
      </span>
    );
  });

  const [countValue, setCountValue] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addBtnFuc = () => {
    setAddBtn(() => {
      return (
        <span className="count-btn">
          <CiCircleMinus
            className="minus"
            onClick={() => {
              if (countValue >= 1) {
                setCountValue(countValue - 1);
              }
            }}
          />
          <p className="count">{countValue}</p>
          <CiCirclePlus className="plus" onClick={() => setCountValue(countValue + 1)} />
        </span>
      );
    });
  };

  const addNull = () => {
    return <p className="price name">${d.price.toFixed(2)}</p>;
  };

  return (
    <div className="product-container">
      <picture onClick={openModal} style={{ cursor: "pointer" }}>
        <source media="(max-width: 440px)" srcSet={d.image.mobile} />
        <source media="(max-width: 688px)" srcSet={d.image.tablet} />
        <source media="(min-width: 1217px)" srcSet={d.image.desktop} />
        <img
          src={d.image.thumbnail}
          alt={d.name}
          style={{ width: "100%", height: "auto", maxWidth: "250px" }}
          className="card-img"
        />
      </picture>
      <button className="btn product-btn" onClick={addBtnFuc}>
        {addBtn}
      </button>
      <div className="card-infos">
        <p className="category">{d.category}</p>
        <p className="name">{d.name}</p>
        {addNull()}
      </div>

      {isModalOpen && <Modal product={d} closeModal={closeModal} />}
    </div>
  );
};

export default Product;
