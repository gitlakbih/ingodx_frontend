import "../styles/formul.css"; // Assuming you have a CSS file for styling
import Navbar from "../components/Navbar";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";


function Delivery() {
  const { t } = useTranslation('delivery');

  // the delivery informations are updated here
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    MobileNumber: '',
    BirthDate: '',
    Country: '',
    State: '',
    City: '',
    Neighborhood: '',
    Transport: '',
    WorkedAsDelivery: ''
  });

  // handleDeliveryChange of the inputs to get data 
  const handleDeliveryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  // handleDeliverySubmit to store data to database
  //Need more edition//no API used
  const handleDeliverySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('https://srv575615.hstgr.cloud/delivery/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Delivery informations stored successfully:', data);
        console.log('Delivery informations stored successfully:', data);
        //card of valid inscription
        const endCard = document.querySelector("#end-card")
        const all = document.querySelector("#all")
        all?.classList.remove('no-display')
        endCard?.classList.add('done')
      } else {
        console.error('Error while storing delivery informations:', data);
        // card of error inscription
        const endCardError = document.querySelector("#end-card-error")
        const allError = document.querySelector("#all-error")
        allError?.classList.remove('no-display')
        endCardError?.classList.add('done')
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/');
  }

  const handleErrorButtonClick = () => {
    navigate('/');
  }
  return (
    <>
      <Navbar></Navbar>
      {/* card for valid order */}
      <div className="no-display all" id="all">
        <div className=" overlay"></div>
        <div className=" " id='end-card'>
          {t("validCard.title")} <br /> <span className="end-card-text">{t("validCard.message")}</span>

          <button className="accepte-btn" onClick={handleButtonClick}>{t("validCard.button")}</button>
        </div>
      </div>

      {/* error card */}
      <div className="no-display all" id="all-error">
        <div className=" overlay"></div>
        <div className=" " id='end-card-error'>
          {/* <svg className="minimize" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path d="M320.7 352c8.1-89.7 83.5-160 175.3-160c8.9 0 17.6 .7 26.1 1.9L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1l32 0 0 69.7c-.1 .9-.1 1.8-.1 2.8l0 112c0 22.1 17.9 40 40 40l16 0c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2l31.9 0 24 0c22.1 0 40-17.9 40-40l0-24 0-64c0-17.7 14.3-32 32-32l64 0 .7 0zM640 368a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 385.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z" />
                    </svg>  */}
          {t("errorCard.title")}
          <br />
          <span className="end-card-text">{t("errorCard.message")}</span>
          <button className="accepte-btn bg-red" onClick={handleErrorButtonClick}>{t("errorCard.button")}</button>
        </div>
      </div>

      <div className="form-cont-ainer" id="formConatsiner">
        <h2>
          {t("title.part1")}
          <span className="text-yellow-500"> {t("title.part2")}</span>
          {t("title.part3")}
          </h2>
        <form action="#" onSubmit={handleDeliverySubmit}>

          <div className="form-groupe">
            <label htmlFor="FirstName">{t("fname")}</label>
            <input
              type="text"
              id="FirstName"
              name="FirstName"
              placeholder={t("fname")}
              value={formData.FirstName}
              onChange={handleDeliveryChange}
              required
            />
          </div>
          <div className="form-groupe">
            <label htmlFor="LastName">{t("lname")}</label>
            <input
              type="text"
              id="LastName"
              name="LastName"
              placeholder={t("lname")}
              value={formData.LastName}
              onChange={handleDeliveryChange}
              required

            />
          </div>
          <div className="form-groupe">
            <label htmlFor="email">{t("email")}</label>
            <input
              type="email"
              id="email"
              name="Email"
              placeholder={t("email")}
              value={formData.Email}
              onChange={handleDeliveryChange}
              required

            />
          </div>
          <div className="form-groupe">
            <label htmlFor="mobileNumber">{t("mobileNumber")}</label>
            <input
              type="text"
              id="mobileNumber"
              name="MobileNumber"
              placeholder={t("mobileNumber")}
              value={formData.MobileNumber}
              onChange={handleDeliveryChange}
              required

            />
          </div>
          <div className="form-groupe">
            <label htmlFor="BirthDate">{t("birthDate")}</label>
            <input
              type="date"
              id="BirthDate"
              name="BirthDate"
              placeholder={t("birthDate")}
              value={formData.BirthDate}
              onChange={handleDeliveryChange}
              required

            />
          </div>
          <div className="form-groupe">
            <label htmlFor="country">{t("country")}</label>
            <input
              type="text"
              id="country"
              name="Country"
              placeholder={t("country")}
              value={formData.Country}
              onChange={handleDeliveryChange}
              required

            />
          </div>
          <div className="form-groupe">
            <label htmlFor="State">{t("state")}</label>
            <input
              type="text"
              id="State"
              name="State"
              placeholder={t("state")}
              value={formData.State}
              onChange={handleDeliveryChange}
              required

            />
          </div>
          <div className="form-groupe">
            <label htmlFor="city">{t("city")}</label>
            <input
              type="text"
              id="city"
              name="City"
              placeholder={t("city")}
              value={formData.City}
              onChange={handleDeliveryChange}
              required

            />
          </div>
          <div className="form-groupe">
            <label htmlFor="Neighborhood">{t("neighborhood")}</label>
            <input
              type="text"
              id="Neighborhood"
              name="Neighborhood"
              placeholder={t("neighborhood")}
              value={formData.Neighborhood}
              onChange={handleDeliveryChange}
              required

            />
          </div>

          <div className="form-groupe">
            <label htmlFor="mot">{t("transportation.label")}</label>
            <select
              id="mot"
              name="Transport"
              value={formData.Transport}
              onChange={handleSelectChange}
              required
            >
              <option value="">{t("transportation.label")}</option>
              <option value="Bike">{t("transportation.option1")}</option>
              <option value="Motorcycle">{t("transportation.option2")}</option>
              <option value="Electric bike">{t("transportation.option3")} </option>
              <option value="Else">{t("transportation.option4")}</option>
            </select>
          </div>

          <div className="form-groupe">
            <label htmlFor="WorkedAsDelivery">{t("experions.label")}</label>
            <select
              id="WorkedAsDelivery"
              name="WorkedAsDelivery"
              value={formData.WorkedAsDelivery}
              onChange={handleSelectChange}
              required
            >
              <option value="">{t("experions.label")}</option>
              <option value="No">{t("experions.option1")}</option>
              <option value="Yes">{t("experions.option2")}</option>

            </select>
          </div>

          <div className="form-groupe">
            <button type="submit" className="btnn">
            {t("sendButton")}
            </button>
          </div>

        </form>
      </div>
    </>
  );
}

export default Delivery;
