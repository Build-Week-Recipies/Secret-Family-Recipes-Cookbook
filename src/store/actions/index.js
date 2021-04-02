
import { axiosWithAuth } from '../../helper/axiosWithAuth'
export const FETCH_RECIPES_SUCCESS = "FETCH_RECIPES_SUCCESS"
export const EDIT_RECIPES_SUCCESS = "EDIT_RECIPES_SUCCESS"
export const FETCH_RECIPES_START = "FETCH_RECIPES_START"
export const FETCH_RECIPES_FAILURE = "FETCH_RECIPES_FAILURE"
export const EDIT_RECIPES_FAILURE = "EDIT_RECIPES_FAILURE"
export const NEW_RECIPES_SUCCESS = "NEW_RECIPES_SUCCESS"
export const NEW_RECIPES_FAILURE = "NEW_RECIPES_FAILURE"

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
        .delete(`https://secret-family-recipes2021.herokuapp.com/api/recipes/${id}`)
        .then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
}

export const editRecipe = (id, editedRecipe) => {
    console.log(id)

    return (dispatch) => {

        axiosWithAuth()
            .put(`https://secret-family-recipes2021.herokuapp.com/api/recipes/${id}`, editedRecipe)
            .then((res) => {
                console.log(res.data)
                dispatch({ type: EDIT_RECIPES_SUCCESS, payload: res.data });
            }).catch((err) => {
                console.log(err);
                dispatch({ type: EDIT_RECIPES_FAILURE, payload: err.message });
            });
    }

}
export const newRecipe = (newRecipe) => {
    return (dispatch) => {

        axiosWithAuth()
            .post(`https://secret-family-recipes2021.herokuapp.com/api/recipes`, newRecipe)
            .then((res) => {
                console.log(res.data)
                dispatch({ type: NEW_RECIPES_SUCCESS, payload: res.data });
            }).catch((err) => {
                console.log(err);
                dispatch({ type: NEW_RECIPES_FAILURE, payload: err.message });
            });
    }

}

