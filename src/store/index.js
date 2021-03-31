import { FETCH_RECIPES_START, FETCH_RECIPES_SUCCESS, FETCH_RECIPES_FAILURE } from "./actions"

const initialState = {
    isLoading: false,
    recipies: [],
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
                RECIPES: action.payload,
                isLoading: false,
                error: ""
            };
        case FETCH_RECIPES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
};
