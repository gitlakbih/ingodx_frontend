import './Market.css';
import Navbar from '../Navbar';

function Market() {



    
    return (
        <>
        <Navbar/>
        <div className="top-div-cont-ainer">
            <div className='sec-cont-ainer'>
                <div className="sec-form-cont-ainer">
                    <h2>Informations d'établissement</h2>
                    <form >
                        <div className="sec-form-group">
                            <label htmlFor="nom-etablissement">Nom d'établissement</label>
                            <input type="text" id="nom-etablissement" name="nom-etablissement" placeholder="Entrez le nom de l'établissement" required />
                        </div>
                        <div className="sec-form-group">
                            <label htmlFor="type-etablissement">Type d'établissement</label>
                            <select id="type-etablissement" name="type-etablissement"
                                // onchange="toggleAutreTypeField()" 
                                required>
                                <option value="">Sélectionner le type</option>
                                <option value="ecole">Entreprise</option>
                                <option value="universite">Magasin</option>
                                <option value="autre">Autre</option>
                            </select>
                        </div>
                        <div className="sec-form-group" id="autre-type-group"
                        // style={{ display: none; }}
                        >
                            <label htmlFor="autre-type">Veuillez spécifier</label>
                            <input type="text" id="autre-type" name="autre-type" placeholder="Entrez un autre type" />
                        </div>
                        <div className="sec-form-group">
                            <label htmlFor="prenom-directeur">Prénom </label>
                            <input type="text" id="prenom-directeur" name="prenom-directeur" placeholder="Prénom du directeur d'établissement" required />
                        </div>
                        <div className="sec-form-group">
                            <label htmlFor="nom-directeur">Nom </label>
                            <input type="text" id="nom-directeur" name="nom-directeur" placeholder="Nom du directeur d'établissement" required />
                        </div>
                        <div className="sec-form-group">
                            <label htmlFor="tel">Numéro de téléphone</label>
                            <input type="tel" id="tel" name="tel" placeholder="Entrez votre numéro de téléphone" required />
                        </div>
                        <div className="sec-form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Entrez votre email" required />
                        </div>
                        <div className="sec-form-group">
                            <label htmlFor="adresse-etablissement">Adresse d'établissement</label>
                            <textarea id="adresse-etablissement" name="adresse-etablissement"
                                // rows="3" 
                                placeholder="Entrez votre adresse" required></textarea>
                        </div>
                        {/* <button type="submit" className="btn">Envoyer</button>&nbsp;&nbsp;  */}
                        <button type="submit" className="button">Envoyer</button>
                    </form>
                </div>
                <div className="sec-image-cont-ainer"></div>
            </div>

        </div>
        </>
    )
}
export default Market;