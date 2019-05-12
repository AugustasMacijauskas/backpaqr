import { getListOfGuidesWithLocations } from './api';

export const GET_LIST_OF_GUIDES_WITH_LOCATIONS_REQUEST = 'GUIDES/GET_LIST_OF_GUIDES_WITH_LOCATIONS_REQUEST';
export const GET_LIST_OF_GUIDES_WITH_LOCATIONS_SUCCESS = 'GUIDES/GET_LIST_OF_GUIDES_WITH_LOCATIONS_SUCCESS';
export const GET_LIST_OF_GUIDES_WITH_LOCATIONS_ERROR = 'GUIDES/GET_LIST_OF_GUIDES_WITH_LOCATIONS_ERROR';

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
