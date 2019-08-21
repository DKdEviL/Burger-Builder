import axios from 'axios';

const instance = axios.create({
    baseURL: "https://react-burger-app-c1eb1.firebaseio.com/"
});

export default instance;