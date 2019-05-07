import {
    GET_LIST_OF_GUIDES_SUCCESS,
} from './actions';

const initialState = {
    guides: [],
};

export default function(state = initialState, { type, payload }) {
    switch (type) {
        case GET_LIST_OF_GUIDES_SUCCESS:
            return {
                ...state,
                guides: [
                    ...payload
                ]
            };

        default:
            return state;
    }
}
