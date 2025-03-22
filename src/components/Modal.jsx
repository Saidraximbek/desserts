import React from "react";

const Modal = ({ product, closeModal }) => {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content">
        <img src="images\icon-order-confirmed.svg" alt="" width={48} />
        <div className="modal-titles">
          <h1 className="modal-title">Order Confirmed</h1>
          <p className="modal-subtitle">We hope you enjoy your food!</p>
        </div>

        <ul className="modal-list">
          <li className="modal-item">
            <div className="img-name">
              <img src={product.image.thumbnail} alt="" width={48} />
              <div className="name-price">
                <p className="modal-item-name">Classic Tiramisu</p>
                <div className="count-price">
                  <p className="prod-count">1x</p>
                  <p className="prod-price">@ ${product.price}</p>
                </div>
              </div>
            </div>

            <h4 className="prod-over-price">$100</h4>
          </li>
          <li className="modal-item">
            <p>Order Total:</p>

            <h4 className="over-total">$100</h4>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
