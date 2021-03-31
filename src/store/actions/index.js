import axios from 'axios'
export const FETCH_RECIPES_SUCCESS = "FETCH_CARDS_SUCCESS"
export const FETCH_RECIPES_START = "FETCH_CARDS_START"
export const FETCH_RECIPES_FAILURE = "FETCH_CARDS_FAILURE"

export const fetchData = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_RECIPES_START });




        const options = {
            method: 'GET',
            url: '',
            headers: {

            }
        };

        axios.request(options).then(function (res) {

            console.log(res.data);
            dispatch({ type: FETCH_RECIPES_SUCCESS, payload: res.data });
        }).catch(function (err) {
            console.error(err);
            dispatch({ type: FETCH_RECIPES_FAILURE, payload: err.message });
        });
    }
}