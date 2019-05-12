import i18n from 'core/localization';

import { getListOfGuides, getGuide } from './api';

import { Guide1, Guide2, Guide3, Guide4, Guide5, Guide6, Guide7 } from 'styles/images';

// List to map guides so that they could be accessed randomly
const guidesPhotos = {
    guide1: Guide1,
    guide2: Guide2,
    guide3: Guide3,
    guide4: Guide4,
    guide5: Guide5,
    guide6: Guide6,
    guide7: Guide7,
};

export const GET_LIST_OF_GUIDES_REQUEST = 'GUIDES/GET_LIST_OF_GUIDES_REQUEST';
export const GET_LIST_OF_GUIDES_SUCCESS = 'GUIDES/GET_LIST_OF_GUIDES_SUCCESS';
export const GET_LIST_OF_GUIDES_ERROR = 'GUIDES/GET_LIST_OF_GUIDES_ERROR';

export const getListOfGuidesAction = () => async (dispatch) => {
    dispatch({
        type: GET_LIST_OF_GUIDES_REQUEST,
    });

    try {
        let guides = await getListOfGuides();

        // Generate an image for each guide to be rendered
        guides = guides.map(guide => {
            return {
                ...guide,
                photo: guidesPhotos[`guide${Math.floor(Math.random() * 7) + 1}`],
            }
        });

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

export const GET_GUIDE_REQUEST = 'GUIDES/GET_GUIDE_REQUEST';
export const GET_GUIDE_SUCCESS = 'GUIDES/GET_GUIDE_SUCCESS';
export const GET_GUIDE_ERROR = 'GUIDES/GET_GUIDE_ERROR';

export const getGuideAction = (guideID) => async (dispatch) => {
    dispatch({
        type: GET_GUIDE_REQUEST,
    });

    try {
        const guide = await getGuide(guideID);

        dispatch({
            type: GET_GUIDE_SUCCESS,
            payload: guide,
        });
    }
    catch (e) {
        dispatch({
            type: GET_GUIDE_ERROR,
            payload: e,
        });
    }
};

export const FILTER_GUIDES_REQUEST = 'GUIDES/FILTER_GUIDES_REQUEST';
export const FILTER_GUIDES_SUCCESS = 'GUIDES/FILTER_GUIDES_SUCCESS';
export const FILTER_GUIDES_ERROR = 'GUIDES/FILTER_GUIDES_ERROR';

export const filterGuidesAction = (search) => async (dispatch, getState) => {
    dispatch({
        type: FILTER_GUIDES_REQUEST,
    });

    try {
        let filteredGuides = getState().guides.guides;
        if (search) {
            filteredGuides = filteredGuides.filter(guide => {
                return (guide.name.toLowerCase().includes(search)
                    || i18n.t(`cities.${guide.city.replace(/\s/g,'')}`).toLowerCase().includes(search));
            });
        }

        dispatch({
            type: FILTER_GUIDES_SUCCESS,
            payload: filteredGuides,
        });
    }
    catch (e) {
        dispatch({
            type: FILTER_GUIDES_ERROR,
            payload: e,
        });
    }
};

