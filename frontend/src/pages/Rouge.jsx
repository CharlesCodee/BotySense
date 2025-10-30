import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ProductCard from "../components/ProductCard";
import ChatBot from "../components/ChatBot";

function Rouge({ products }) {
  return (
    <div className="productPages">
      {products
        .filter((product) => product.categorie === "Rouge à lèvre")
        .map((product) => (
          <Link key={product.id} to={`/Products/${product.id}`}>
            <ProductCard product={product} key={product.id} />
          </Link>
        ))}
        <ChatBot />
    </div>
  );
}

Rouge.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Rouge;
