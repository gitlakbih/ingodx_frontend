import '../styles/tsakher.css'
import Navbar from '../components/Navbar'

function TsakherLiya() {


    return (
        <>
            <Navbar />
               <div className="form-cont-ainer glass-card">
                <div className=" ">
                    <h2>Tsakher liya</h2>
                    <form action="#">
                        <div className="form-groupe glass-form-groupe">
                            <label htmlFor="nom">Nom</label>
                            <input type="text" id="nom" name="nom" placeholder="Entrez votre nom" required />
                        </div>
                        <div className="form-groupe glass-form-groupe">
                            <label htmlFor="prenom">Prénom</label>
                            <input type="text" id="prenom" name="prenom" placeholder="Entrez votre prénom" required />
                        </div>
                        <div className="form-groupe glass-form-groupe">
                            <label htmlFor="tel">Numéro de téléphone</label>
                            <input type="tel" id="tel" name="tel" placeholder="Entrez votre numéro de téléphone" required />
                        </div>
                        <div className="form-groupe glass-form-groupe">
                            <label htmlFor="adresse">Adresse</label>
                            <input type="text" id="adresse" name="adresse" placeholder="Entrez votre adresse" required />
                        </div>
                        <div className="form-groupe glass-form-groupe">
                            <label htmlFor="message">Votre besion</label>
                            <textarea id="message" name="message" placeholder="Entrez votre message" required></textarea>
                        </div>
                        <div className="form-groupe glass-form-groupe">
                        <button type="submit" className="btnn">Confirmer la cammande</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )}
export default TsakherLiya;