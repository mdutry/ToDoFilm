import axios from 'axios'

const headers = {
    "Content-Type": "application/json"
}
const burl = 'http://localhost:5000'

export default {
    connexion: function(email, password) {
        return axios.post(
            `${burl}/api/connexion`,
            {
                email,
                password
            },
            {
                headers: headers
            }
        );
    },
    inscription: function(send) {
        return axios.post(`${burl}/api/inscription`, send, { headers: headers });
    },

    // isAuth: function() {
    //     return localStorage.getItem("token") !== null;
    // },
    // logout: function() {
    //     localStorage.clear();
    // }
};