import './profile.css'
import React, { useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';


function Profile(){
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    const accessToken = Cookies.get('access_token');
    if (accessToken) {
      // Send API request using the access token
      axios.get('https://ingodx-backend.onrender.com/api/access_token', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then(response => {
        console.log('Data:', response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    } else {
      console.error('Access token not found');
      navigate('/');
    }
  }, []);


  
    const handleLogout = () => {
      Cookies.remove('access_token');
      logout();
      navigate('/');
    };

    return(
        <div className='father'>

        <div className='fix-card-profile card-profile'>
            <div className="profile-pic">

            </div>
            <h2 className='profile-user-name'>Accont</h2>
            <button onClick={handleLogout}>Logout</button>
        <div className="add-order-profile"></div>
        </div>
        <div className='card-profile main-card-profile'>
        </div>
        </div>
)};
export default Profile ;