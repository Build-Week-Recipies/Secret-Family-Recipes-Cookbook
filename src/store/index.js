import { FETCH_RECIPES_START, FETCH_RECIPES_SUCCESS, FETCH_RECIPES_FAILURE, EDIT_RECIPES_SUCCESS, EDIT_RECIPES_FAILURE, NEW_RECIPES_FAILURE, NEW_RECIPES_SUCCESS } from "./actions"
// import data from '../dummyData/data'
const initialState = {
    isLoading: false,
    recipes: [],
    error: ""
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RECIPES_START:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_RECIPES_SUCCESS:
            return {
                ...state,
                recipes: action.payload,
                isLoading: false,
                error: ""
            };
        case FETCH_RECIPES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case EDIT_RECIPES_SUCCESS:
            return {
                ...state,
                recipes: state.recipes.map(recipe => {
                    return parseInt(recipe.id) === parseInt(action.payload[0].id) ? action.payload[0] : recipe
                })
            };
        case EDIT_RECIPES_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        case NEW_RECIPES_SUCCESS:
            return {
                ...state
            };
        case NEW_RECIPES_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};
