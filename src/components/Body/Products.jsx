import React, { useEffect, useState } from "react";
import Topnavfilter from "./Topnavfilter";
import Sidefilter from "./Sidefilter";
import ProductList from "./ProductList";
import "./Products.css";

const Products = () => {
  const [showSideFilter, setShowSideFilter] = useState(false);
  const [products, setProducts] = useState(null);
  const [filterProducts, setFilterProducts] = useState(null);

  const handleSideFilter = () => {
    setShowSideFilter(!showSideFilter);
  };

  const data = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
    setFilterProducts(data);
  };

  useEffect(() => {
    data();
  }, []);

  const sortProducts = (filterOption) => {
    if(filterOption === "Newest First") {
      const sortedProducts = [...products].reverse();
      setFilterProducts(sortedProducts);
    } else if(filterOption === "Recommended") {
      const sortedProducts = [...products];
      setFilterProducts(sortedProducts);
    } else if(filterOption === "Popular") {
      const sortedProducts = [...products].sort((a, b) => b.rating.rate - a.rating.rate);
      setFilterProducts(sortedProducts);
    } else if(filterOption === "Price : High to Low") {
      const sortedProducts = [...products].sort((a, b) => b.price - a.price);
      setFilterProducts(sortedProducts);
    } else if(filterOption === "Price : Low to High") {
      const sortedProducts = [...products].sort((a, b) => a.price - b.price);
      setFilterProducts(sortedProducts);
    }
  }

  return (
    <div className="main-container">
      <Topnavfilter sortProducts={sortProducts} sideFilterValue={showSideFilter} setShowSideFilter={handleSideFilter} />
      <div className="secondary-container">
        {showSideFilter && <Sidefilter />}
        <ProductList products={filterProducts}/>
      </div>
    </div>
  );
};

export default Products;