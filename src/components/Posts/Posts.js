import React, { useEffect, useCallback } from 'react';
import classes from './Posts.module.css';
import PostCard from '../UI/PostCard/PostCard';
import { removePost, fetchPosts } from '../../store/actions/posts';
import { useDispatch, useSelector } from 'react-redux';
const Posts = (props) => {
    document.title = "Doron Project Posts Lists";

    const posts = useSelector(state => state.posts.posts)
    const dispatch = useDispatch();

    const onRemovePost = id => dispatch(removePost(id));
    const onFetchPosts = useCallback(() => dispatch(fetchPosts()), [dispatch]);

    useEffect(
        () => { onFetchPosts(); }, [onFetchPosts]
    );

    return (
        <div className={classes.Posts}>
            {posts.map(post => <PostCard key={post.id} post={post} onDelete={onRemovePost} />)}
        </div>
    )
}

export default Posts
