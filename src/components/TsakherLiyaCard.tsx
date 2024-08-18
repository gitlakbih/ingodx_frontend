import '../styles/tsakher.css'
import '../styles/formul.css'
import { useState } from 'react'

function TsakherLiya() {
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

        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {   // submit function to send data to server
        //test
        // console.log(formData)

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
        // must add a sign to tell that the order done or failed
    };

    return (
        <div className=" overlay " id='formul'>
            <div className="form-cont-ainer glass-card">

                <h2>Tsakher liya</h2>
                <form action="#" 
                onSubmit={handleSubmit}
                >
                    <div className='both'>
                        <div className="form-groupe glass-form-groupe">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Name"
                                required />
                        </div>
                        <div className="form-groupe glass-form-groupe">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Last Name"
                                required />
                        </div></div>
                    <div className="form-groupe glass-form-groupe">
                        <label htmlFor="tell">Mobile Number</label>
                        <input
                            type="tell"
                            id="tell"
                            name="tell"
                            value={formData.tell}
                            onChange={handleChange}
                            placeholder="Mobile Number"
                            required />
                    </div>
                    <div className="form-groupe glass-form-groupe">
                        <label htmlFor="adresse">Adresse</label>
                        <input
                            type="text"
                            id="adresse"
                            name="adresse"
                            value={formData.adresse}
                            onChange={handleChange}
                            placeholder="Adresse"
                            required />
                    </div>
                    <div className="form-groupe glass-form-groupe">
                        <label htmlFor="order">Discripe your order here</label>
                        <textarea
                            id="order"
                            name="order"
                            value={formData.order}
                            onChange={handleTextChange}
                            placeholder="Message"
                            required></textarea>
                    </div>
                    <div className="form-groupe glass-form-groupe">
                        <button type="submit" className="btnn">Confirm order</button>
                    </div>

                </form>
            </div>
        </div>


    )
}
export default TsakherLiya;