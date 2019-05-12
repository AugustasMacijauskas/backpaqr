import { axios } from 'core';

export const getListOfGuides = async () => {
    return (await axios.get('guides')).data.data;
};

export const getGuide = async (id) => {
    return (await axios.get(`guides/${id}`)).data.data;
};
