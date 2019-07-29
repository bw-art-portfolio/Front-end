import axios from 'axios';

//Action types
// export const REG_PENDING = 'REG_PENDING';
// export const REG_SUCCESS = 'REG_SUCCESS';
// export const REG_FAILED = 'REG_FAILED';

// export const LOGIN_PENDING = 'LOGIN_PENDING';
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// export const LOGIN_FAILED = 'LOGIN_FAILED';

export const GET_ARTIST_START = 'GET_ARTIST_START';
export const GET_ARTIST_SUCCESS = 'GET_ARTIST_SUCCESS';
export const GET_ARTIST_FAILED = 'GET_ARTIST_FAILED';



export const getArtists = () => {
    axios.get('https://artportfoliobw.herokuapp.com/');
    return dispatch => {
        dispatch({ type: GET_ARTIST_START })
            .then(res => {
                dispatch({ type: GET_ARTIST_SUCCESS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: GET_ARTIST_FAILED, payload: err })
            });

    };
};