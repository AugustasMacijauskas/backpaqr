import { axios } from 'core';

export const getListOfGuidesWithLocations = async (howMany) => {
    return (await axios.get(`guides_recent?how_many=${howMany}`)).data.data;
};
