import './profile.css'
import React, { useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Profile() {
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

  return (
    <div className='father'>

      <div className='fix-card-profile card-profile'>
        <div className="profile-pic">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>            </div>
        <h2 className='profile-user-name'>Accont</h2>
        <button className='logout-button' onClick={handleLogout}>Log out</button>
        
      </div>
      <div className='card-profile main-card-profile'>
        <Link to='/Tsakherliya'><div className="add-order-profile">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
        </div></Link>
      </div>
    </div>
  )
};
export default Profile;