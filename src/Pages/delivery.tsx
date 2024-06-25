import "./delivery.css"; // Assuming you have a CSS file for styling
import Navbar from "../Navbar";

function Delivery() {
  return (
    <>
      <Navbar></Navbar>
      <div className="top-div-cont-ainer">
        <div className="cont-ainer">
          <div className="form-cont-ainer">
            <h2>Informations de livreur</h2>
            <form action="#">
              <div className="form-groupe">
                <label htmlFor="prenom-livreur">Prénom</label>
                <input
                  type="text"
                  id="prenom-livreur"
                  name="prenom"
                  placeholder="Votre prénom"
                  required
                />
              </div>
              <div className="form-groupe">
                <label htmlFor="nom-livreur">Nom</label>
                <input
                  type="text"
                  id="nom-livreur"
                  name="nom"
                  placeholder="Votre nom"
                  required
                />
              </div>
              <div className="form-groupe">
                <label htmlFor="tel">Numéro de téléphone</label>
                <input
                  type="tel"
                  id="tel"
                  name="tel"
                  placeholder="Entrez votre numéro de téléphone"
                  required
                />
              </div>
              <div className="form-groupe">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Entrez votre Email"
                  required
                />
              </div>
              <div className="form-groupe">
                <label htmlFor="ville">Ville</label>
                <input
                  type="text"
                  id="ville"
                  name="ville"
                  placeholder="Entrez votre ville"
                  required
                />
              </div>
              <button type="submit" className="btnn">
                Envoyer
              </button>
            </form>
          </div>
          <div className="image-cont-ainer">
            {/* <img
              src="src\assets\moto-bike.jpg"
              alt="Livreur"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Delivery;
