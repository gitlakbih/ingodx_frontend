import "../styles/formul.css";
import "../styles/Market.css"
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";



function Market() {
    const { t } = useTranslation('market');

    // the business informations needed
    const [formData, setFormData] = useState({
        //first field --> business info
        BusinessMobile: "",
        BusinessCity: "",
        BusinessAddress: "",
        //second field --> products info
        ProductType: "",
        ProductImage: "",
        ProducsNumber: "", //use a good name
        //third field --> customer info
        CustomerName: "",
        CustomerMobile: "",
        CustomerAddress: "",
    });

    // handleDeliveryChange of the inputs to get data
    const handleBusinessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // handleStepsChange of the inputs to get data
    const handleClick = () => {
        const productGroup = document.querySelector("#productGroup");
        const range = document.querySelector("#range");

        productGroup?.classList.add("placement");
        range?.classList.add("step-one");
    };
    // handleStepsChange of the inputs to get data
    const handleClickTwo = () => {
        const customerGroup = document.querySelector("#customerGroup");
        const range = document.querySelector("#range");

        customerGroup?.classList.add("placement");
        range?.classList.add("step-two");
        range?.classList.remove("step-one");
    };

    // handleBusinessSubmit to store data to database
    const handleBusinessSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        //test
        console.log(formData)
        const range = document.querySelector("#range");
        range?.classList.add("step-tree");
        range?.classList.remove("step-two");

        e.preventDefault();
        try {
            const response = await fetch(
                "https://srv575615.hstgr.cloud/market/",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                }
            );
            const data = await response.json();
            if (response.ok) {
                console.log("business order informations stored successfully:", data);

                //card of valid inscription
                const endCard = document.querySelector("#end-card")
                const all = document.querySelector("#all")
                all?.classList.remove('no-display')
                endCard?.classList.add('done')
            } else {
                console.error("Error while storing business order informations:", data);
                // card of error inscription
                const endCardError = document.querySelector("#end-card-error")
                const allError = document.querySelector("#all-error")
                allError?.classList.remove('no-display')
                endCardError?.classList.add('done')
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    // navigate function of valid card
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/');
    }

    // error card function
    const handleErrorButtonClick = () => {
        navigate('/');
    }


    return (
        <>
            <Navbar />
            {/* card for valid order */}
            <div className="no-display all" id="all">
                <div className=" overlay"></div>
                <div className=" " id='end-card'>
                    <svg className="minimize" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path d="M320.7 352c8.1-89.7 83.5-160 175.3-160c8.9 0 17.6 .7 26.1 1.9L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1l32 0 0 69.7c-.1 .9-.1 1.8-.1 2.8l0 112c0 22.1 17.9 40 40 40l16 0c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2l31.9 0 24 0c22.1 0 40-17.9 40-40l0-24 0-64c0-17.7 14.3-32 32-32l64 0 .7 0zM640 368a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 385.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z" />
                    </svg>
                    {t("market.orderSentMessage")}
                    <br />
                    <span className="end-card-text">{t("market.supportTeamMessage")}
                    </span>
                    <button className="accepte-btn" onClick={handleButtonClick}>{t("market.orderSentOkButton")}
                    </button>
                </div>
            </div>
            {/* error card */}
            <div className="no-display all" id="all-error">
                <div className=" overlay"></div>
                <div className=" " id='end-card-error'>
                    {/* <svg className="minimize" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path d="M320.7 352c8.1-89.7 83.5-160 175.3-160c8.9 0 17.6 .7 26.1 1.9L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1l32 0 0 69.7c-.1 .9-.1 1.8-.1 2.8l0 112c0 22.1 17.9 40 40 40l16 0c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2l31.9 0 24 0c22.1 0 40-17.9 40-40l0-24 0-64c0-17.7 14.3-32 32-32l64 0 .7 0zM640 368a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 385.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z" />
                    </svg>  */}
                    {t("market.errorTitle")}
                    <br />
                    <span className="end-card-text">{t("market.errorMessage")}</span>
                    <button className="accepte-btn bg-red" onClick={handleErrorButtonClick}>{t("market.errorOkButton")}</button>
                </div>
            </div>

            {/* order form */}
            <div className="form-cont-ainer">
                <h2>{t("market.formTitle")}</h2>
                <div className="stepsRange" id="stepsRange">
                    <div className="range " id="range"></div>
                </div>
                <form action=""
                    onSubmit={handleBusinessSubmit}
                >
                    <div className="businessGroup" id="businessGroup">
                        <div className="form-groupe">
                            <label htmlFor="BusinessMobile">{t("market.businessMobileLabel")}</label>
                            <input
                                type="tel"
                                id="BusinessMobile"
                                name="BusinessMobile"
                                placeholder={t("market.businessMobilePlaceholder")}
                                value={formData.BusinessMobile}
                                onChange={handleBusinessChange}
                                required />
                        </div>
                        <div className="form-groupe">
                            <label htmlFor="BusinessCity">{t("market.businessCityLabel")}</label>
                            <input
                                type="text"
                                id="BusinessCity"
                                name="BusinessCity"
                                placeholder={t("market.businessCityPlaceholder")}
                                value={formData.BusinessCity}
                                onChange={handleBusinessChange}
                                required />
                        </div>
                        <div className="form-groupe">
                            <label htmlFor="BusinessAddress">{t("market.businessAddressLabel")} </label>
                            <input
                                type="text"
                                id="BusinessAddress"
                                name="BusinessAddress"
                                placeholder={t("market.businessAddressPlaceholder")}
                                value={formData.BusinessAddress}
                                onChange={handleBusinessChange}
                                required />
                        </div>
                        <div className="form-groupe">
                            <button id="btn"
                                onClick={handleClick}
                                className="btnn">
                                {t("market.nextButton")}
                            </button>
                        </div>
                    </div>
                    <div className="productGroup" id="productGroup">
                        <div className="form-groupe">
                            <label htmlFor="ProductType">{t("market.productTypeLabel")}</label>
                            <input
                                type="text"
                                id="ProductType"
                                name="ProductType"
                                placeholder={t("market.productTypePlaceholder")}
                                value={formData.ProductType}
                                onChange={handleBusinessChange}
                                required />
                        </div>
                        <div className="form-groupe">
                            <label htmlFor="ProductImage">{t("market.productImageLabel")} <span className="text-gray-400">{t("market.productImageOptional")}</span> </label>
                            <input
                                type="file"
                                id="ProductImage"
                                name="ProductImage"
                                placeholder={t("market.productImagePlaceholder")}
                                value={formData.ProductImage}
                                onChange={handleBusinessChange}
                            />
                        </div>
                        <div className="form-groupe">
                            <label htmlFor="ProducsNumber">{t("market.productsNumberLabel")} </label>
                            <input
                                type="text"
                                id="ProducsNumber"
                                name="ProducsNumber"
                                placeholder={t("market.productsNumberPlaceholder")}
                                value={formData.ProducsNumber}
                                onChange={handleBusinessChange}
                                required />
                        </div>
                        <div className="form-groupe">
                            <button id="btn"
                                onClick={handleClickTwo}
                                className="btnn">
                                {t("market.nextButton")}
                            </button>
                        </div>
                    </div>
                    <div className=" customerGroup" id="customerGroup">
                        <div className="form-groupe">
                            <label htmlFor="CustomerName">{t("market.customerNameLabel")} </label>
                            <input
                                type="text"
                                id="CustomerName"
                                name="CustomerName"
                                placeholder={t("market.customerNamePlaceholder")}
                                value={formData.CustomerName}
                                onChange={handleBusinessChange}
                                required />
                        </div>
                        <div className="form-groupe">
                            <label htmlFor="CustomerMobile">{t("market.customerMobileLabel")}</label>
                            <input
                                type="text"
                                id="CustomerMobile"
                                name="CustomerMobile"
                                placeholder={t("market.customerMobilePlaceholder")}
                                value={formData.CustomerMobile}
                                onChange={handleBusinessChange}
                                required />
                        </div>
                        <div className="form-groupe">
                            <label htmlFor="CustomerAddress">{t("market.customerAddressLabel")}</label>
                            <input
                                type="text"
                                id="CustomerAddress"
                                name="CustomerAddress"
                                placeholder={t("market.customerAddressPlaceholder")}
                                value={formData.CustomerAddress}
                                onChange={handleBusinessChange}
                                required />
                        </div>
                        <div className="form-groupe">
                            <button type="submit" id="btn"
                                // onClick={handleBusinessSubmit}
                                className="btnn">
                                {t("market.confirmButton")}
                            </button>
                        </div>
                    </div>

                    {/* <div className="form-groupe">
                        <button type="submit" id="btn" 
                        // onClick={handleBusinessSubmit} 
                        className="btnn">
                            Send
                        </button>
                    </div> */}
                </form>
            </div>
        </>
    );
}
export default Market;
