import {
    GET_LIST_OF_GUIDES_WITH_LOCATIONS_SUCCESS,
} from './actions';

const initialState = {
    guidesWithLocations: [],
};

export default function(state = initialState, { type, payload }) {
    switch (type) {
        case GET_LIST_OF_GUIDES_WITH_LOCATIONS_SUCCESS:
            return {
                ...state,
                guidesWithLocations: [
                    ...payload
                ]
            };

        default:
            return state;
    }
}
