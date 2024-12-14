import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    name: "Chandan Agarbathi",
    image: "https://example.com/product-1.jpg",
    originalPrice: 999,
    discountedPrice: 675,
    discountPercentage: 32.3,
  },
  {
    name: "Chandan Agarbathi",
    image: "https://example.com/product-2.jpg",
    originalPrice: 999,
    discountedPrice: 675,
    discountPercentage: 32.3,
  },
  // Add more product data as needed...
];

const Products = () => {
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </div>
  );
};

export default Products;