import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_info">
        <div className="info_item">
          <img src="./images/cadenas.png" alt="" />
          <p>Paiement sécurisé</p>
        </div>
        <div className="info_item">
          <img src="./images/chrono.png" alt="" />
          <p>Livraison en 48h</p>
        </div>
        <div className="info_item">
          <img src="./images/telephone.png" alt="" />
          <p>Une question sur un produit ? Ecrivez-nous</p>
        </div>
        <div className="info_item">
          <img src="./images/camion.png" alt="" />
          <p>Livraison Offerte</p>
        </div>
        <img src="./images/BotySense.png" alt="" className="logo_footer" />
      </div>
    </div>
  );
}

export default Footer;
