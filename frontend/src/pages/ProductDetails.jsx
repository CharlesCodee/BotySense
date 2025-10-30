import React from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

function ProductDetails({ products }) {
  const { id } = useParams();
  const { nom, descriptionLongue, image, ingredients, prix, note } =
    products.find((product) => product.id.toString() === id);

  // Fonction pour générer les étoiles en fonction de la note arrondie
  const afficherEtoiles = () => {
    const noteArrondie = Math.round(note);
    const etoilesPleines = "★".repeat(noteArrondie); // Utiliser un caractère d'étoile pleine
    const etoilesVides = "☆".repeat(5 - noteArrondie); // Utiliser un caractère d'étoile vide

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
      <img src={image} alt={nom} />
      <div className="text">
        <h1>{nom}</h1>
        {afficherEtoiles()}
        <p className="desc">{descriptionLongue}</p>
        <p className="ing">{ingredients}</p>
        <button type="button">{`${prix} € -  Ajouter au panier`}</button>
      </div>
    </div>
  );
}

ProductDetails.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default ProductDetails;
