import React from "react";
import PropTypes from "prop-types";

function ProductCard({ product }) {
  const { nom, description, prix, image } = product;

  return (
    <div>
      <div className="productCard">
        <img src={image} alt={nom} />
        <div className="text">
          <h1>{nom}</h1>
          <p className="description">{description}</p>
          <p className="prix">{prix} €</p>
          <button type="button">Ajouter au panier</button>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default ProductCard;
