import React from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

function ProductDetails({ products }) {
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);

  if (!product) return <p>Produit non trouvé</p>;

  const { nom, descriptionLongue, image, ingredients, prix, note } = product;

  // Fonction pour générer les étoiles
  const afficherEtoiles = () => {
    const noteArrondie = Math.round(note);
    const etoilesPleines = "★".repeat(noteArrondie);
    const etoilesVides = "☆".repeat(5 - noteArrondie);

    return (
      <div className="etoiles">
        <span className="plein" style={{ color: "#D79A10" }}>
          {etoilesPleines}
        </span>
        <span className="vide" style={{ color: "#ccc" }}>
          {etoilesVides}
        </span>
      </div>
    );
  };

  return (
    <div className="productDetails">
      <div className="imageWrapper">
        <img src={image} alt={nom} />
      </div>
      <div className="text">
        <h1>{nom}</h1>
        {afficherEtoiles()}
        <p className="desc">{descriptionLongue}</p>
        <p className="ing">{ingredients}</p>
        <button type="button">{`${prix} € - Ajouter au panier`}</button>
      </div>
    </div>
  );
}

ProductDetails.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default ProductDetails;
