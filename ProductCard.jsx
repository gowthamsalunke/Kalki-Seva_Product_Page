import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">
          ₹{product.originalPrice}
          <span className="discount">
            ₹{product.discountedPrice} ({product.discountPercentage}% OFF)
          </span>
        </p>
        <div className="rating">
          {/* Add your logic to display the rating based on the product */}
          ★★★★★
        </div>
        <button>Add to Cart</button>
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCard;