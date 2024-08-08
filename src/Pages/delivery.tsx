import "../styles/formul.css"; // Assuming you have a CSS file for styling
import Navbar from "../components/Navbar";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function Delivery() {

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
  const handleDeliveryChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  // handleDeliverySubmit to store data to database
  //Need more edition//no API used
  const handleDeliverySubmit = async (e) => {

    //test
    console.log(formData)
    //card of valid inscription
    // const endCard = document.querySelector("#end-card")
    // endCard?.classList.add('done')




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

      //card of valid inscription
      const endCard = document.querySelector("#end-card")
      const all = document.querySelector("#all")
      all?.classList.remove('no-display')
      endCard?.classList.add('done')

    } catch (error) {
      console.error('Error:', error);

      // card of error inscription
      const endCardError = document.querySelector("#end-card-error")
      const allError = document.querySelector("#all-error")
      allError?.classList.remove('no-display')
      endCardError?.classList.add('done')
      
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
          Thank you <br /> <span className="end-card-text">Support team will call you soon</span>

          <button className="accepte-btn" onClick={handleButtonClick}>Ok</button>
        </div>
      </div>

      {/* error card */}
      <div className="no-display all" id="all-error">
        <div className=" overlay"></div>
        <div className=" " id='end-card-error'>
          {/* <svg className="minimize" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path d="M320.7 352c8.1-89.7 83.5-160 175.3-160c8.9 0 17.6 .7 26.1 1.9L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1l32 0 0 69.7c-.1 .9-.1 1.8-.1 2.8l0 112c0 22.1 17.9 40 40 40l16 0c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2l31.9 0 24 0c22.1 0 40-17.9 40-40l0-24 0-64c0-17.7 14.3-32 32-32l64 0 .7 0zM640 368a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 385.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z" />
                    </svg>  */}
          Error
          <br />
          <span className="end-card-text">there is a problem try again</span>
          <button className="accepte-btn bg-red" onClick={handleErrorButtonClick}>Ok</button>
        </div>
      </div>
      <div className="form-cont-ainer" id="formConatsiner">
        <h2>Please enter the
          <span className="text-yellow-500"> Required</span> information below</h2>
        <form action="#" onSubmit={handleDeliverySubmit}>

          <div className="form-groupe">
            <label htmlFor="FirstName">First Name</label>
            <input
              type="text"
              id="FirstName"
              name="FirstName"
              placeholder="First Name"
              value={formData.FirstName}
              onChange={handleDeliveryChange}
              required
            />
          </div>
          <div className="form-groupe">
            <label htmlFor="LastName">Last Name</label>
            <input
              type="text"
              id="LastName"
              name="LastName"
              placeholder="Last Name"
              value={formData.LastName}
              onChange={handleDeliveryChange}
              required

            />
          </div>
          <div className="form-groupe">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="Email"
              placeholder="Your Email"
              value={formData.Email}
              onChange={handleDeliveryChange}
              required

            />
          </div>
          <div className="form-groupe">
            <label htmlFor="mobileNumber">Mobile Number</label>
            <input
              type="text"
              id="mobileNumber"
              name="MobileNumber"
              placeholder="Mobile Number"
              value={formData.MobileNumber}
              onChange={handleDeliveryChange}
              required

            />
          </div>
          <div className="form-groupe">
            <label htmlFor="BirthDate">Birth Day</label>
            <input
              type="date"
              id="BirthDate"
              name="BirthDate"
              placeholder="Your Birth Day"
              value={formData.BirthDate}
              onChange={handleDeliveryChange}
              required

            />
          </div>
          <div className="form-groupe">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="Country"
              placeholder="Your Country"
              value={formData.Country}
              onChange={handleDeliveryChange}
              required

            />
          </div>
          <div className="form-groupe">
            <label htmlFor="State">State</label>
            <input
              type="text"
              id="State"
              name="State"
              placeholder="Your State"
              value={formData.State}
              onChange={handleDeliveryChange}
              required

            />
          </div>
          <div className="form-groupe">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="City"
              placeholder="Your City"
              value={formData.City}
              onChange={handleDeliveryChange}
              required

            />
          </div>
          <div className="form-groupe">
            <label htmlFor="Neighborhood">Neighborhood</label>
            <input
              type="text"
              id="Neighborhood"
              name="Neighborhood"
              placeholder="Your Neighborhood"
              value={formData.Neighborhood}
              onChange={handleDeliveryChange}
              required

            />
          </div>

          <div className="form-groupe">
            <label htmlFor="mot">Means of transportation</label>
            <select
              id="mot"
              name="Transport"
              value={formData.Transport}
              onChange={handleDeliveryChange}
              required

            >
              <option value="">Means of transportation</option>
              <option value="Bike">bike</option>
              <option value="Motorcycle">Motorcycle</option>
              <option value="Electric bike">Electric bike</option>
              <option value="Else">Else</option>
            </select>
          </div>

          <div className="form-groupe">
            <label htmlFor="WorkedAsDelivery">Do you ever worked with a deliver company ?</label>
            <select
              id="WorkedAsDelivery"
              name="WorkedAsDelivery"
              value={formData.WorkedAsDelivery}
              onChange={handleDeliveryChange}
              required

            >
              <option value="Bike">Do you have a experions as a delivery</option>
              <option value="No">No, I do not</option>
              <option value="Yes">Yes, I do</option>

            </select>
          </div>

          <div className="form-groupe">
            <button type="submit" className="btnn">
              Send
            </button>
          </div>

        </form>
      </div>
    </>
  );
}

export default Delivery;
