import '../styles/tsakher.css'
import '../styles/formul.css'
import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import { useTranslation } from "react-i18next";


function TsakherLiya() {
    const { t } = useTranslation('tsakherliya');

    // order data
    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        tell: "",
        adresse: "",
        order: "",
    });

    // handleChange of the inputs to get data 
    const handleChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    // handleChange of the inputs to get data 
    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement> ) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        //test
        console.log(formData)

        e.preventDefault();
        try {
            const response = await fetch('http://54.224.239.150:5000/users/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (response.ok) {
                console.log('Delivery informations stored successfully:', data);
            } else {
                console.error('Error while storing delivery informations:', data);
            }
        } catch (error) {
            console.error('Error:', error);
        }

        // must add a sign to tell that the order done
        // and faild
    };

    return (
        <>
        <Navbar/>
            <div className="form-cont-ainer glass-card">

                <h2>{t("title")}</h2>
                <form action="#" 
                onSubmit={handleSubmit}
                >
                    <div className='both'>
                        <div className="form-groupe glass-form-groupe">
                            <label htmlFor="name">{t("name")}</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder={t("name")}
                                required />
                        </div>
                        <div className="form-groupe glass-form-groupe">
                            <label htmlFor="lastName">{t("lastName")}</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder={t("lastName")}
                                required />
                        </div></div>
                    <div className="form-groupe glass-form-groupe">
                        <label htmlFor="tell">{t("m obileNumber")}</label>
                        <input
                            type="tel"
                            id="tell"
                            name="tell"
                            value={formData.tell}
                            onChange={handleChange}
                            placeholder={t("mobileNumber")}
                            required />
                    </div>
                    <div className="form-groupe glass-form-groupe">
                        <label htmlFor="adresse">{t("adresse")}</label>
                        <input
                            type="text"
                            id="adresse"
                            name="adresse"
                            value={formData.adresse}
                            onChange={handleChange}
                            placeholder={t("adresse")}
                            required />
                    </div>
                    <div className="form-groupe glass-form-groupe">
                        <label htmlFor="order">{t("order")}</label>
                        <textarea
                            id="order"
                            name="order"
                            value={formData.order}
                            onChange={handleTextChange}
                            placeholder={t("message")}
                            required></textarea>
                    </div>
                    <div className="form-groupe glass-form-groupe">
                        <button type="submit" className="btnn">{t("confirmButton")}</button>
                    </div>

                </form>
            </div>

        </>
    )
}
export default TsakherLiya;