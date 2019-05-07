import { axios } from 'core';

export const getListOfGuides = async () => {
    return (await axios.get('guides')).data.data;
};
