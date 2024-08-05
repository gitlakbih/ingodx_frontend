import "../styles/formul.css"; // Assuming you have a CSS file for styling
import Navbar from "../components/Navbar";
import { useEffect, useState } from 'react';


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
    const endCard = document.querySelector("#end-card")
    endCard?.classList.add('done')



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



  };

  return (
    <>
      <Navbar></Navbar>
      <div className="no-display " id='end-card'> Thank you <br /> <span className="end-card-text">Support team will call you soon</span></div>
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
              
            />
          </div>

          <div className="form-groupe">
            <label htmlFor="mot">Means of transportation</label>
            <select
              id="mot"
              name="Transport"
              value={formData.Transport}
              onChange={handleDeliveryChange}
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
