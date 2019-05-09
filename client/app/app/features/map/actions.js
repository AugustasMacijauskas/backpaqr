import { getListOfGuidesWithLocations } from './api';

export const GET_LIST_OF_GUIDES_WITH_LOCATIONS_REQUEST = 'GUIDES/GET_LIST_OF_GUIDES_WITH_LOCATIONS_REQUEST';
export const GET_LIST_OF_GUIDES_WITH_LOCATIONS_SUCCESS = 'PLACES/GET_LIST_OF_GUIDES_WITH_LOCATIONS_SUCCESS';
export const GET_LIST_OF_GUIDES_WITH_LOCATIONS_ERROR = 'PLACES/GET_LIST_OF_GUIDES_WITH_LOCATIONS_ERROR';

export const getListOfGuidesWithLocationsAction = (howMany) => async (dispatch) => {
    dispatch({
        type: GET_LIST_OF_GUIDES_WITH_LOCATIONS_REQUEST,
    });

    try {
        const guidesWithLocations = await getListOfGuidesWithLocations(howMany);

        dispatch({
            type: GET_LIST_OF_GUIDES_WITH_LOCATIONS_SUCCESS,
            payload: guidesWithLocations,
        });
    }
    catch (e) {
        dispatch({
            type: GET_LIST_OF_GUIDES_WITH_LOCATIONS_ERROR,
            payload: e,
        });
    }
};
