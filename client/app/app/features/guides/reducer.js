import {
    GET_LIST_OF_GUIDES_SUCCESS,
    GET_GUIDE_SUCCESS,
    FILTER_GUIDES_SUCCESS
} from './actions';

const initialState = {
    guides: [],
    currentGuide: null,
    filteredGuides: [],
};

export default function(state = initialState, { type, payload }) {
    switch (type) {
        case GET_LIST_OF_GUIDES_SUCCESS:
            return {
                ...state,
                guides: payload,
                filteredGuides: payload
            };

        case GET_GUIDE_SUCCESS:
            return {
                ...state,
                currentGuide: payload,
            };

        case FILTER_GUIDES_SUCCESS:
            return {
                ...state,
                filteredGuides: payload
            };

        default:
            return state;
    }
}
