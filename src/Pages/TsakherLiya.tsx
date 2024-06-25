import './tsakher.css'
import Navbar from '../Navbar'

function TsakherLiya() {


    return (

        <>
            <Navbar />
            <div className='top-div-cont-ainer'>

            <div className="containerr">
                <img className='Limg' src="src\assets\logo.jpg" alt="Logo" />
                <div className="form-containerr">
                    <h2>Tsakher liya</h2>
                    <form action="#">
                        <div className="form-groupr">
                            <label htmlFor="nom">Nom</label>
                            <input type="text" id="nom" name="nom" placeholder="Entrez votre nom" required />
                        </div>
                        <div className="form-groupr">
                            <label htmlFor="prenom">Prénom</label>
                            <input type="text" id="prenom" name="prenom" placeholder="Entrez votre prénom" required />
                        </div>
                        <div className="form-groupr">
                            <label htmlFor="tel">Numéro de téléphone</label>
                            <input type="tel" id="tel" name="tel" placeholder="Entrez votre numéro de téléphone" required />
                        </div>
                        <div className="form-groupr">
                            <label htmlFor="adresse">Adresse</label>
                            <input type="text" id="adresse" name="adresse" placeholder="Entrez votre adresse" required />
                        </div>
                        <div className="form-groupr">
                            <label htmlFor="message">Votre besion</label>
                            <textarea id="message" name="message" placeholder="Entrez votre message" required></textarea>
                        </div>
                        <button type="submit" className="button">Confirmer la cammande</button>
                    </form>
                </div>
            </div>
            </div>
        </>
    )
};
export default TsakherLiya;