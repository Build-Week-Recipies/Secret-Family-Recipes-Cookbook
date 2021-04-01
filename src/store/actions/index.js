import { Contacts } from '@material-ui/icons'
import { axiosWithAuth } from '../../helper/axiosWithAuth'
export const FETCH_RECIPES_SUCCESS = "FETCH_CARDS_SUCCESS"
export const FETCH_RECIPES_START = "FETCH_CARDS_START"
export const FETCH_RECIPES_FAILURE = "FETCH_CARDS_FAILURE"

export const fetchData = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_RECIPES_START });



        axiosWithAuth()
            .get("https://secret-family-recipes2021.herokuapp.com/api/recipes")
            .then(function (res) {

                console.log(res.data);
                dispatch({ type: FETCH_RECIPES_SUCCESS, payload: res.data });
            }).catch(function (err) {
                console.error(err);
                dispatch({ type: FETCH_RECIPES_FAILURE, payload: err.message });
            });
    }
}

export const deleteRecipe = (id) => {
    axiosWithAuth()
        .delete(`https://secret-family-recipes2021.herokuapp.com/api/auth/recipes/${id}`)
        .then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
}
