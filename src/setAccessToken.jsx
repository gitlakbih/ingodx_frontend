import Cookies from "js-cookie";
import './CheckLogin'
import getAccessToken from "./CheckLogin";

const accessToken = getAccessToken();
console.log(accessToken);
// Function to set the access token in cookies
function setAccessToken( accessToken, expiresInDays = 1) {
    try {
        if (accessToken) {
            Cookies.set('access_token', accessToken, { expires: expiresInDays });
            console.log('Access token has been set.');
        } else {
            console.log('No access token provided.');
        }
    } catch (error) {
        console.error('Error setting access token:', error);
    }
}
export default setAccessToken;