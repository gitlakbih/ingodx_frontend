import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Cookies from 'js-cookie';
import '../login.css';

function Login_Signup() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        user_type: '',
        full_name: ''
    });

    const [formDataLogin, setFormDataLogin] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleChangeLogin = (e) => {
        const { name, value } = e.target;
        setFormDataLogin(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://ingodx-backend.onrender.com/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (response.ok) {
                console.log('User registered successfully:', data);
            } else {
                console.error('Error registering user:', data);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

            const handleSubmitLogin = async (e) => {
                e.preventDefault();
        try {
            const response = await fetch('https://ingodx-backend.onrender.com/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formDataLogin)
            });
            const data = await response.json();
            if (response.ok) {
                console.log('User Logged in successfully', data);
                const access_token = data.access_token
                Cookies.set('access_token', access_token, { expires: 7 }); // Expires in 7 days

            } else {
                console.error('Error Logging in', data);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        const sign_in_btn = document.querySelector("#sign-in-btn");
        const sign_up_btn = document.querySelector("#sign-up-btn");
        const container = document.querySelector(".container");

        const handleSignUpClick = () => {
            if (container) container.classList.add("sign-up-mode");
        };

        const handleSignInClick = () => {
            if (container) container.classList.remove("sign-up-mode");
        };

        if (sign_up_btn) sign_up_btn.addEventListener("click", handleSignUpClick);
        if (sign_in_btn) sign_in_btn.addEventListener("click", handleSignInClick);

        return () => {
            if (sign_up_btn) sign_up_btn.removeEventListener("click", handleSignUpClick);
            if (sign_in_btn) sign_in_btn.removeEventListener("click", handleSignInClick);
        };
    }, []);

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="forms-container">
                    <div className="signin-signup">
                        <form onSubmit={handleSubmitLogin} className="sign-in-form">
                            <h2 className="title">Sign in</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    value={formDataLogin.username}
                                    onChange={handleChangeLogin}
                                    required
                                />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={formDataLogin.password}
                                    onChange={handleChangeLogin}
                                    required
                                />
                            </div>
                            <input type="submit" value="Login" className="btn solid" />
                        </form>

                        <form onSubmit={handleSubmit} className="sign-up-form">
                            <h2 className="title">Sign up</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input
                                    type="text"
                                    name="full_name"
                                    placeholder="Full Name"
                                    value={formData.full_name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className='input-field'>
                                <select name="type" id="type">
                                    <option value="custoimer">Custumer </option>
                                    <option value="deliver">Deliver</option>
                                    <option value="etablissement">Etablissement</option>
                                    <option value="other">other</option>
                                </select>

                            </div>

                            {/* <div className="usertype">
                                <label htmlFor="Customer">
                                    <input
                                        type="radio"
                                        id="option1"
                                        name="user_type"
                                        value="customer"
                                        checked={formData.user_type === 'customer'}
                                        onChange={handleChange}
                                    /> Customer
                                </label>
                                <label htmlFor="Deliver">
                                    <input
                                        type="radio"
                                        id="option2"
                                        name="user_type"
                                        value="delivery"
                                        checked={formData.user_type === 'delivery'}
                                        onChange={handleChange}
                                    /> Deliver
                                </label>
                            </div> */}


                            <input type="submit" className="btn" value="Sign up" />
                        </form>
                    </div>
                </div>

                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>New here ?</h3>
                            <p>
                                Ready to explore more? Sign up and customize your experience with our platform's tools and resources.
                            </p>
                            <button className="btn transparent" id="sign-up-btn">
                                Sign up
                            </button>
                        </div>
                        <img src="img/log.svg" className="image" alt="" />
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>Join us again!</h3>
                            <p>
                                Welcome back! Please enter your username and password to access your account.
                            </p>
                            <button className="btn transparent" id="sign-in-btn">
                                Sign in
                            </button>
                        </div>
                        <img src="img/register.svg" className="image" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login_Signup;
