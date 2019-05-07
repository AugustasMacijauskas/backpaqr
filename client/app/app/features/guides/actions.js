import { getListOfGuides } from './api';

export const GET_LIST_OF_GUIDES_REQUEST = 'GUIDES/GET_LIST_OF_GUIDES_REQUEST';
export const GET_LIST_OF_GUIDES_SUCCESS = 'PLACES/GET_LIST_OF_GUIDES_SUCCESS';
export const GET_LIST_OF_GUIDES_ERROR = 'PLACES/GET_LIST_OF_GUIDES_ERROR';

export const getListOfGuidesAction = () => async (dispatch) => {
    dispatch({
        type: GET_LIST_OF_GUIDES_REQUEST,
    });

    try {
        const guides = await getListOfGuides();

        dispatch({
            type: GET_LIST_OF_GUIDES_SUCCESS,
            payload: guides,
        });
    }
    catch (e) {
        dispatch({
            type: GET_LIST_OF_GUIDES_ERROR,
            payload: e,
        });
    }
};
