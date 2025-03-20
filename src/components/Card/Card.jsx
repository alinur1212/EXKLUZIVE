import React from 'react';
import "../Card/Card.scss";

function Card({ pro }) {
  return (
    
    <div className='product-card'>
      <div className="discount-badge">
        <p className='send'>-{pro.discount}%</p>
        <img src={pro.thumbnail} alt={pro.name} />
      </div>

      <div className='pos-img'>
        <img src={pro.image1} alt="Product Image 1" />
        <img src={pro.image2} alt="Product Image 2" />
      </div>

      <div className='texts'>
        <div className="product-title">
          <h2>{pro.name}</h2>
        </div>
        <div className="price">
          <p>${pro.discountPercentage}</p>
          <del>${pro.price}</del>
        </div>

        <div className="rating">
          <img src="star-icon.png" alt="star" />
          <span>{pro.rating} Stars</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
