import * as actionsTypes from './actionsType';
import axios from '../../axios';

export const saveNewPost = post => {
    return dispatch => {
        axios.post('/posts.json', post)
            .then(res => {
                dispatch(fetchPosts())
            })
            .catch(err => console.error(err));
    }
}

// Deleting Posts
export const removePost = (postId) => {
    return {
        type: actionsTypes.REMOVE_POST,
        postId
    };
};

export const deletePost = postId => {
    return dispatch => {
        axios.delete(`/posts/${postId}.json`)
            .then(res => dispatch(removePost(postId)))
            .catch(err => console.error(err));
    }
}

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
                console.log('fetchPostsSuccess', fetchedPosts);

            }).catch(err => console.error(err));
    }
}