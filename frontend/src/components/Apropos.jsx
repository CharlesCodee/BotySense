function Apropos() {
  return (
    <div className="apropos">
      <div className="title-description">
        <h2 className="titledescription">A propos</h2>
        <div className="description-container">
          <div className="content">
            <img src="./images/paragraphe.svg" alt="" className="image" />
            <div className="paragraphe">
              {" "}
              <p>
                <div className="title_propos">Bienvenue sur BotySense,</div>
                <br />
                <br />
                Votre destination de choix pour tout ce qui concerne l'univers
                captivant de la beauté et de la cosmétique signgit ée Oreal.
                Chez BotySense, nous sommes déterminés à vous découvrir votre
                propre sens de la beauté et de l'élégance, tout en mettant à
                votre disposition une gamme exclusive de produits de qualité
                supérieure. <br />
                <br />
                Explorez notre catalogue varié et laissez-vous séduire par notre
                sélection soigneusement choisie de produits Oreal. Que vous
                recherchiez des produits de maquillage pour sublimer votre
                apparence, des soins de la peau pour une peau éclatante, des
                produits capillaires pour des cheveux magnifiques ou des parfums
                envoûtants pour une touche de glamour, BotySense a tout ce qu'il
                vous faut.
              </p>
            </div>
          </div>
        </div>
        <div className="img-container1">
          <img
            src="./images/citationloreal.png"
            alt="citations"
            className="img-citation"
          />
          <img
            className="gif"
            src="./images/Neutral Modern Skincare Instagram Reels.gif"
            alt="Votre Vidéo GIF"
          />
        </div>
      </div>
      <div className="testzeubi">
        <p>Découvrir nos collaborateurs</p>
      </div>
      <section id="slideshow">
        <div className="entire-content">
          <div className="content-carrousel">
            <figure className="shadow">
              <a href="https://www.armanibeauty.fr/">
                <img src="./images/armani.svg" alt="armani" />
              </a>
            </figure>
            <figure className="shadow">
              <a href="https://www.garnier.fr/">
                <img src="./images/garnierr.svg" alt="garnier" />
              </a>
            </figure>
            <figure className="shadow">
              <a href="https://www.itcosmetics.com/">
                <img src="./images/comestics.svg" alt="itcosmetics" />
              </a>
            </figure>
            <figure className="shadow">
              <a href="https://www.kiehls.fr/search?msclkid=6731e84760851b3fddfc8dee5303ed75&utm_source=bing&utm_medium=cpc&utm_campaign=kie_goog_ao_multi_marque-pure_bran_search_text_sales_fr_brandpure_roas_roas&utm_term=kiehl%27s&utm_content=kiehls_standard_mixed_2p-keyword&cgid=cyber-days">
                <img src="./images/Kiehls.svg" alt="kiehls" />
              </a>
            </figure>
            <figure className="shadow">
              <a href="https://www.lancome.fr/">
                <img src="./images/Lancome.svg" alt="lancome" />
              </a>
            </figure>
            <figure className="shadow">
              <a href="https://www.loreal-paris.fr/">
                <img src="./images/orealparis.svg" alt="lorealparis" />
              </a>
            </figure>
            <figure className="shadow">
              <a href="https://www.maybelline.fr/">
                <img src="./images/maybelline.svg" alt="maybelline" />
              </a>
            </figure>
            <figure className="shadow">
              <a href="https://noscheveux.com/">
                <img src="./images/mg.svg" alt="mg" />
              </a>
            </figure>
            <figure className="shadow">
              <a href="https://www.urbandecay.com/">
                <img src="./images/ud.svg" alt="ud" />
              </a>
            </figure>
            <figure className="shadow">
              <a href="https://www.yslbeauty.fr/">
                <img src="./images/yvessaintlaurent.svg" alt="yvesstlolo" />
              </a>
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Apropos;
