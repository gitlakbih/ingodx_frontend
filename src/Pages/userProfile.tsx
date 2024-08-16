import SideBar from '../components/SideBar.tsx'
import AddOrderBtn from '../components/AddOrderBtn.tsx';
import TopStatu from '../components/TopStatu.tsx';
import Orders from '../components/Orders.tsx';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
// import TsakherLiya from "../components/TsakherLiya";


function UserProfile() {

  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = Cookies.get('access_token');
    if (accessToken) {
      // Send API request using the access token
      axios.get('https://ingodx-backend.onrender.com/api/access_token', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
        .then(response => {console.log('Data:', response.data);})
        .catch(error => {console.error('Error fetching data:', error);});
    } else {
      console.error('Access token not found');
      navigate('/');
    }
  });


  return (
    <>
      <SideBar />
      <TopStatu/>
      <Orders/>
      <AddOrderBtn />
      {/* <TsakherLiya></TsakherLiya> */}

    </>
)
}

export default UserProfile;