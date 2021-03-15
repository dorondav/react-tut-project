import * as actionTypes from '../actions/actionsType';
const initState = {
    posts: []
}



const deletePost = (state, action) => {
    return { posts: state.posts.filter((post) => post.id !== action.postId) }
}


const fetchPostsSuccess = (state, action) => {
    return {
        ...state,
        posts: action.posts
    }
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.REMOVE_POST: return deletePost(state, action);
        case actionTypes.FETCH_POSTS_SUCCESS: return fetchPostsSuccess(state, action);
        default: return state
    }
}
export default reducer;