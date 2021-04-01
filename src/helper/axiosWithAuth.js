import axios from "axios";


export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://secret-family-recipes2021.herokuapp.com/',
        headers: {
            Authorization: token,
        },
    });
};

