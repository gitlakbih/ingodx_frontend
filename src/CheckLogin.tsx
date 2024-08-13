import Cookies from "js-cookie";

// Function to get the access token from cookie
async function getAccessToken() {
    try {
        const accessToken = Cookies.get('access_token');
        if (!accessToken) {
            console.log('No access token found.');
            return false;
        }
        if (accessToken){
            console.log('Access token found.');
            return accessToken
        }

    } catch (error) {
        console.error('Error during login check:', error);
        return false;
    }
}
export default getAccessToken;