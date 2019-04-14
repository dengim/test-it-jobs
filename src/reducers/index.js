import {
    GET_VACANCIES_REQUEST,
    GET_VACANCIES_SUCCESS,
    GET_VACANCIES_FAIL
} from "../actions";

export const initialState = {
    originData: [],
    filteredData: [],
    isFetching: true,
    error: ""
};

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_VACANCIES_REQUEST:
            return {
                ...state,
                isFetching: true,
                error: ""
            };

        case GET_VACANCIES_SUCCESS:
            return {
                ...state,
                originData: action.payload,
                filteredData: action.payload,
                isFetching: false,
                error: ""
            };

        case GET_VACANCIES_FAIL:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            };

        default:
            return state;
    }
}
