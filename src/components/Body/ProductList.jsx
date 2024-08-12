import React, { useState } from "react";
import "./ProductList.css";
import heartIcon from "../../assets/icons/heart.png";
import redHeart from "../../assets/icons/red heart.png";
import Shimmerui from "./ShimmerUI";


const ProductList = ({ products }) => {
  const [likedProducts, setLikedProducts] = useState([1, 2, 5]);

  const toggleLike = (productId) => {
    if (likedProducts.includes(productId)) {
      setLikedProducts(likedProducts.filter((id) => id !== productId));
    } else {
      setLikedProducts([...likedProducts, productId]);
    }
  };

  const isLiked = (productId) => {
    return likedProducts.includes(productId);
  };

  return (
    <div className="products-container">
      {!products ? (
        <Shimmerui />
      ) : (
        products.map((product) => {
          const { id, image, price, title } = product;
          return (
            <div className="product-item" key={id}>
              <img src={image} alt={title} />
              <h2>{title}</h2>
              <div className="price-container">
                <p>$ {price}</p>
                <img
                  src={isLiked(id) ? redHeart : heartIcon}
                  alt={isLiked(id) ? "red heart icon" : "heart icon"}
                  onClick={() => toggleLike(id)}
                />
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default ProductList;