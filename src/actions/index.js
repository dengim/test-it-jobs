import axios from "axios";

export const GET_VACANCIES_REQUEST = "GET_VACANCIES_REQUEST";
export const GET_VACANCIES_SUCCESS = "GET_VACANCIES_SUCCESS";
export const GET_VACANCIES_FAIL = "GET_VACANCIES_FAIL";

export function getVacancies() {
    return dispatch => {
        dispatch({
            type: GET_VACANCIES_REQUEST
        });

        axios({
            method: "get",
            url: "https://api.hh.ru/vacancies",
            params: {
                page: 0,
                per_page: 50,
                area: 99, //Уфа
                order_by: "publication_time",
                specialization: 1.221 //Программирование, Разработка
            }
        })
            .then(response => {
                dispatch({
                    type: GET_VACANCIES_SUCCESS,
                    payload: response.data.items
                });
            })
            .catch(error => {
                dispatch({
                    type: GET_VACANCIES_FAIL,
                    payload: "server error"
                });
            });
    };
}
