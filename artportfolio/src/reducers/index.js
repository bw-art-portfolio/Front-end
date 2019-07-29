import {
    // REG_PENDING,
    // REG_SUCCESS,
    // REG_FAILED,
    // LOGIN_PENDING,
    // LOGIN_SUCCESS,
    // LOGIN_FAILED,
    GET_ARTIST_START,
    GET_ARTIST_SUCCESS,
    GET_ARTIST_FAILED,
} from '../actions/index';

const initialState = {
    artists: [],
    fetchingArtists: false,
    error: null,


}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ARTIST_START:
            return {
                ...state,
                fetchingArtists: true
            };
        case GET_ARTIST_SUCCESS:
            return {
                ...state,
                fetchingArtists: false,
                artists: action.payload,
            };
        case GET_ARTIST_FAILED:
            return {
                ...state,
                fetchingArtists: false,
                error: true,
            };
        default:
            return state;
    }

};

export default reducer;