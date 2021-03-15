import * as actionsTypes from './actionsType';
import axios from '../../axios';

export const removePost = (id) => {
    return {
        type: actionsTypes.REMOVE_POST,
        postId: id
    };
};


// Get all posts from firebase Dispatch cell
export const fetchPostsSuccess = posts => {
    return {
        type: actionsTypes.FETCH_POSTS_SUCCESS,
        posts
    }
}
export const fetchPostsFail = error => {
    return {
        type: actionsTypes.FETCH_POSTS_FAIL,
        error
    }
}

export const fetchPostsStart = () => {
    return {
        type: actionsTypes.FETCH_POSTS_START
    };
}
// Get all posts from firebase Action

export const fetchPosts = () => {
    return dispatch => {
        axios.get('/posts.json')
            .then(res => {
                const fetchedPosts = [];
                for (let key in res.data) {
                    fetchedPosts.push({
                        ...res.data[key],
                        id: key
                    });
                }
                dispatch(fetchPostsSuccess(fetchedPosts));
            }).catch(err => console.error(err));
    }
}