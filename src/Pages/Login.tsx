import '../styles/login.css';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";

// the component function of login page
const Login_Signup = () => {
  const {t}= useTranslation('login')

  // important variables
  const navigate = useNavigate();
  const [error, setError] = useState('');

  // the user registory informations are updated here
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    // isPassword: '',
    user_type: '',
    full_name: ''
  });
  
  // user Login data stored here
  const [formDataLogin, setFormDataLogin] = useState({
    username: '',
    password: ''
  });

  // the functions for the sign up 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {   // handleChange of the inputs to get data 
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {   // handleChange of the select to get data 
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {   // handleSubmit of the Sign up Form 
    e.preventDefault();
    try {
      const response = await fetch('https://srv575615.hstgr.cloud/users/signup', {   // Notice --> should change fetch to axios
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


  // the functions for the sign up 
  const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {  // handleChange of the login inputs to get data 
    const { name, value } = e.target;
    setFormDataLogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const handleSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {  // handleSubmit of the login inputs to send data to dataBase
    e.preventDefault();
    try {
      // response the api / waiting data to be stored
      const response = await fetch('https://srv575615.hstgr.cloud/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formDataLogin)
      });
      const data = await response.json();
      if (response.ok) {
        console.log('User logged in successfully', data);
        const access_token = data.access_token;
        Cookies.set('access_token', access_token, { expires: 1}); // Expires in 1 day
        navigate('/Profile');
      } else {
        setError(t('error_password_incorrect'));
        console.error('Error logging in', data);
      }
    } catch (error) {
      setError(t('error_occurred'));
      console.error('Error:', error);
    }
  };


  // the script of changing mode sign up to login
  useEffect(() => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".containerl");

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
      <div className="containerl">
        <div className="forms-container">
          <div className="signin-signup">
            <form onSubmit={handleSubmitLogin} className="sign-in-form">
              <h2 className="title">{t("login")}</h2>
              <div className="input-field">
                <i className="fa-solid fa-user"></i>
                <input
                  type="text"
                  name="username"
                  placeholder={t("username")}
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
                  placeholder={t("password")}
                  value={formDataLogin.password}
                  onChange={handleChangeLogin}
                  required
                />
              </div>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <input type="submit" value={t("login" )}className="btn solid" />
            </form>

            <form onSubmit={handleSubmit} className="sign-up-form">
              <h2 className="title">{t("signup")}</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  name="username"
                  placeholder={t("username")}
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
                  placeholder={t("full_name")}
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
                  placeholder={t("email")}
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
                  placeholder={t("password")}
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  name="isPassword"
                  placeholder="Confirm Password"
                  required
                />
              </div>  */}

              <div className="input-field">
                <i className=" fas fa-solid fa-check"></i>
                <select name="user_type" 
                id="type" 
                value={formData.user_type} 
                onChange={handleSelectChange}>
                  <option  value="">{t("select_an_option")}</option>
                  <option value='customer'>{t("customer")}</option>
                  <option value='deliver'>{t("deliver")}</option>
                  <option value='etablissment'>{t("etablissment")}</option>
                  <option value='other'>{t("other")}</option>
                </select>
              </div>
              <input type="submit" className="btn" value={t("signup")} />
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>
              {t("new_here")}
              </h3>
              <p>
              {t("explore_more")}
              </p>
              <button className="btn transparent" id="sign-up-btn">
              {t("signup")}   
              </button>
            </div>
            <img src="img/log.svg" className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>
              {t("join_us_again")}   
              </h3>
              <p>
              {t("welcome_back")}   
              </p>
              <button className="btn transparent" id="sign-in-btn">
              {t("login")}   
              </button>
            </div>
            <img src="img/register.svg" className="image" alt="" />
          </div>
        </div>
      </div>

    </>
  );
};

export default Login_Signup;
