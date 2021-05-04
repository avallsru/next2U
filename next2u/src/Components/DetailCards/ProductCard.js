import React from 'react';
// import PropTypes from 'prop-types';

const ProductCard = props => {
  return (
    <div className="detailsCard-container" >
      <div className="detail-img container">
        <img src="assets/img/stores/1.jpg" alt="detail-img" />
      </div>
      <div className="detail-basic-data container">
        <p className="detail-name">{}</p>
        
        <div className="category-names">{}</div>
      </div>
      <div className="detail-other-info container">
        <div className="opening-hours">
        </div>
        <div className="paying-info">
          <div className="delivery-price">
            <span>
              <b>Entrega:</b>
            </span>
            <span>{}</span>
          </div>
          <div className="minimum-order">
            <span>
              <b>Pedido mín:</b>
            </span>
            <span>{}</span>
          </div>
        </div>
      </div>
    </div>
  )
};

// ProductCard.propTypes = {
  
// };

export default ProductCard;