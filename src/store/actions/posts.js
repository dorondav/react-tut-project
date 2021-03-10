import * as actionsTypes from './actionsType';

export const removePost = (id) => {
    return {
        type: actionsTypes.REMOVE_POST,
        id
    };
};


