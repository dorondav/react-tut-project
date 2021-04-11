import * as actionTypes from '../actions/actionsType';
const initState = {
    posts: [],
    newPostState: false
}
console.log(initState.newPostState)
const deletePost = (state, action) => {
    return { posts: state.posts.filter((post) => post.id !== action.postId) }
}

const fetchPostsSuccess = (state, action) => {
    return {
        ...state,
        posts: action.posts,
        newPostState: false

    }
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_POSTS_SUCCESS: return fetchPostsSuccess(state, action);
        case actionTypes.REMOVE_POST: return deletePost(state, action);
        default: return state
    }
}
export default reducer;