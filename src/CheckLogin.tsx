import Cookies from 'js-cookie';

async function checkLogin() {
    try {
        const accessToken = Cookies.get('access_token');
        if (!accessToken) {
            console.log('No access token found.');
            return false;
        }

        const response = await fetch('https://ingodx-backend.onrender.com/api/access_token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'access_token': accessToken })
        });

        const data = await response.json();
        if (response.ok) {
            console.log('User is authenticated:', data);
            return true;
        } else {
            console.error('Invalid access token:', data);
            return false;
        }
    } catch (error) {
        console.error('Error during login check:', error);
        return false;
    }
}

export default checkLogin;
