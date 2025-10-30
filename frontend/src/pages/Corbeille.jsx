function Corbeille() {
  return (
    <div>
      <main className="container">
        <div className="grid">
          <section>
            <div className="title_basket">
              <h2>Panier</h2>
              <h3>Vos articles sélectionnés</h3>
            </div>
            <div className="grid">
              <article>
                <figure>
                  <img
                    src="/Creme_de_peau/d33fefba-5170-4a85-ae63-e3b4497ad440.webp"
                    alt="Article 1"
                  />
                  <figcaption>Article 1</figcaption>
                </figure>
                <p>Masque hydratant nuit - Prix: 14.99€</p>
                <input type="number" defaultValue={1} />
                <button type="button">Supprimer</button>
              </article>
              <article>
                <figure>
                  <img
                    src="/Coloration/c8a699b1-2e5d-4f50-afbc-294acc988ea6.webp"
                    alt="Article 2"
                  />
                  <figcaption>Article 2</figcaption>
                </figure>
                <p>Coloration cuivrée flamboyante - Prix: 9.99€</p>
                <input type="number" defaultValue={1} />
                <button type="button">Supprimer</button>
              </article>
              {/* Ajoutez plus d'articles ici */}
            </div>
          </section>
        </div>
      </main>
      <section aria-label="Subscribe example">
        <div className="abonne">
          <article>
            <div className="text_abonne">
              <h2>S'abonner</h2>
              <h3>Restez informé des nouveautés</h3>
            </div>
            <form className="grid_abonne">
              <div className="form-item">
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="Votre nom"
                  aria-label="Nom"
                  required
                />
              </div>
              <div className="form-item">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Votre email"
                  aria-label="Email"
                  required
                />
              </div>
              <div className="form-item">
                <button
                  type="submit"
                  onClick={(event) => event.preventDefault()}
                >
                  S'abonner
                </button>
              </div>
            </form>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Corbeille;
